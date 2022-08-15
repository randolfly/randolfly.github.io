import asyncio
import sys

import aiohttp
import requests


async def fetch(url: str, session: aiohttp.ClientSession, order: int) -> tuple[bytes, int]:
    async with session.get(url) as ret:
        return (await ret.content.read(), order)


async def fetch_concurrent(urls: list[str], cookies, headers) -> list[bytes]:
    loop = asyncio.get_event_loop()
    imgs = [None] * len(urls)

    async with aiohttp.ClientSession(cookies=cookies, headers=headers) as session:
        tasks = []
        for i, u in enumerate(urls):
            tasks.append(loop.create_task(fetch(u, session, i)))
        for ret in asyncio.as_completed(tasks):
            img, order = await ret
            imgs[order] = img

    return imgs


def concurrent_download(url_list: list[str], session: requests.Session, concurrent: int) -> list[bytes]:
    cookies = session.cookies
    headers = session.headers
    urls_generator = (url_list[i:i + concurrent] for i in range(0, len(url_list), concurrent))

    img_list = []
    for urls in urls_generator:
        img_list += asyncio.run(fetch_concurrent(urls, cookies, headers))
        sys.stdout.write(f'Downloaded Page #{len(img_list)}')
        sys.stdout.write('\r')
        sys.stdout.flush()

    return img_list
