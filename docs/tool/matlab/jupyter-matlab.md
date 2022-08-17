---
date: 2022-06-06
tag:
  - tool
  - matlab
  - jupyter
category:
  - tool
  - matlab
---

# jupyter matlab

# Jupyter Matlab


## 定义

> 21 February 2018, update: the new JupyterLab was just released, and according to this tweet is really......

_21 February 2018, update: the new JupyterLab was just released, and according to_ [_this tweet_](https://twitter.com/inferencelab/status/966437392088535047) _is really easy to integrate with Matlab. Probably worth checking out instead of the reasonably outdated instructions below!_

I really like Python’s philosophy, but over the last years I haven’t been able to switch the code for my research from Matlab. At this point, the transition costs are too high for me, but it’s a move I have planned for some point in the future.

Now, Python has the awesome Jupyter (formerly IPyton notebook) feature, that allows for comments, code, and most importantly graphical output (i.e. figures you’ve just generated) to be shown in one document. This is a great way to share and explain the code you’re writing, since the reader immediately sees how output is generated without having to run all the analyses themselves.

Matlab has a [Publish](http://fr.mathworks.com/help/matlab/matlab_prog/publishing-matlab-code.html#responsive_offcanvas) function that attempts to do something similar, and outputs HTML files containing both code and figures. However, there are a few drawbacks: it uses its own Markup text layout language, and GitHub (where I intend to host my notebooks) does not natively render html.

Luckily, some awesome people have made it really easy to generate IPython notebooks using Matlab, that are super easy to share or host on GitHub. Here’s the step-by-step guide:

1. Download and install Anaconda [https://www.continuum.io/downloads](https://www.continuum.io/downloads). Restart Terminal. Or, if you’d prefer to not get the full Anaconda software, check out [this post](https://w01f359.wordpress.com/2016/10/09/matlab-notebook/).
2. In terminal, type
	`pip install pymatbridge`
	`pip install matlab_kernel`
	`python -m matlab_kernel install`
3. Point the kernel to your version of Matlab. I added
	`export MATLAB_EXECUTABLE=/Applications/MATLAB_R2015b.app/bin/matlab` to my _.bash_profile_ file. To do this from Terminal, type `echo “export MATLAB_EXECUTABLE=/Applications/MATLAB_2015b.app/bin/matlab” >> ~/.bash_profile`. Of course, make sure the location and version of Matlab match yours.
4. Restart terminal or load `.bash_profile`. Type `ipython notebook` in Terminal. Your browser will open a Jupyter window, where on the right hand side you can go to New -> Notebooks -> Matlab.
5. You’re now ready to run your notebook! Simply write or copy a block of code from matlab, and click Run. The figures will automatically appear when you are calling any plotting function. When you push your Notebook.ipynb file to GitHub, it will automatically render the layout and figures. You can also download the whole notebook to HTML which can be viewed in any web browser.

See [here](https://github.com/anne-urai/PupilPreprocessing/blob/master/pupilTutorial.ipynb) for an example notebook, analysing some pupillometry data in Matlab. Here’s a screenshot of a notebook on signal detection theory:

![](https://anneurai.files.wordpress.com/2015/11/screen-shot-2015-11-12-at-14-54-50.png?w=376)

This code works on a Mac OS X El Capitan, and requires some familiarity with Terminal.

## 参考

- [Matlab-based IPython notebooks – CoCoSys lab (anneurai.net)](https://anneurai.net/2015/11/12/matlab-based-ipython-notebooks/#:~:text=Your%20browser%20will%20open%20a%20Jupyter%20window%2C%20where,appear%20when%20you%20are%20calling%20any%20plotting%20function.)
