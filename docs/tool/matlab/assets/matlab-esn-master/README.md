---
date: 2022-06-06
tag:
  - default
category:
  - tool
  - matlab
  - assets
  - matlab-esn-master
---

# README
# 

### matlab-esn: A flexible and extensible echo state network (ESN) framework for Matlab.


#### Summary: 
ESN is a type of input driven recurrent neural network (RNN) where the input and recurrent connections are initialized with no further adaptation. It uses a linear readout layer trained with ordinary linear regression to produce a desired output. Due to limited learning it is very fast but has representational limitations and therefore cannot be applied to all problems. Specifically, if the problem can benefit from a short-term memory (STM), then ESN is a very fast and accurate way to solve the problem. Note that, temporal problems that can benefit from STM are not limited to those with short temporal dependencies. For example ESN has the state-of-the-art performance in chaotic perdiction where the correlation length may be arbitrarily long. 

ESN also falls under a broader systems called reservoir computing whose premise is to use the transient dynamics of a fixed system for signal processing. This model is specially attractive for unconventional computing researchers for example those working with self-assembeld nanoscale wires or other physical substrates such as DNA. 


This framework is specially designed to be highly flexible for adopting different update mechanisms, time evolution, training, connectivity, and transfer functions. Several examples are given under the examples directory.


#### Contact: 
For any question contact Alireza Goudarzi: alireza.goudarzi@riken.jp

#### My pages: 
https://sites.google.com/site/alirezagoudarzi/


#### Publications: 
- A. Goudarzi and A. Shabani and D. Stefanovic, Exploring Transfer Function Nonlinearity in Echo State Networks, CISDA 2015, arXv:1502.04423 [cs.NE]

- A. Goudarzi and A. Shabani and D. Stefanovic, Product Echo State Networks: Time-Series Computation with Multiplicative Neurons, IJCNN 2015, arXiv:1502.00718 [cs.NE].
- A. Goudarzi and D. Stefanovic, Towards a Calculus of Echo State Networks, to appear in BICA Procedia, 2014, arXiv:1409.0280 [cs.NE]. 
- A. Goudarzi and M. R. Lakin and D. Stefanovic and C. Teuscher. A Model for Variation- and Fault-Tolerant Digital Logic using Self-Assembled Nanowire Architectures, Proceedings of the 2014 IEEE/ACM International Symposium on Nanoscale Architectures (NANOARCH), 2014, arXiv:1406.3433v1 [cs.ET].
- A. Goudarzi and M. R. Lakin and D. Stefanovic. Reservoir Computing Approach to Robust Computation using Unreliable nanoscale Networks,Unconventional Computation and Natural Computation, pp. 164-176, 2014, aXiv:1405.0296 [cs.ET].
- A. Goudarzi and P. Banda and M. R. Lakin and C. Teuscher and Darko Stefanovic, A Comparative Study of Reservoir Computing for Temporal Signal Processing, arXiv:1401.2224 [cs.NE].
