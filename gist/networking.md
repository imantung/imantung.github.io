---
layout: gist
title: Networking
---


`TCP` = Transmission Control Protocol
  - Guarantees the recipient will receive the packets in order

`TCP/IP` = TCP over IP

`TCP` using handshake to establish connection
- Host A sends a TCP SYNchronize packet to Host B
- Host B receives A's SYN
- Host B sends a SYNchronize-ACKnowledgement
- Host A receives B's SYN-ACK
- Host A sends ACKnowledge
- Host B receives ACK. 

`UDP` = User Diagram Protocol
  - TCP without error checking

TLS

SSL


TCP/IP Model Layers
- Application Layer -> provides applications the ability to access the services of the other layers and defines the protocols that applications use to exchange data
- Transport Layer -> responsible for providing the Application layer with session and datagram communication services
- Internet Layer -> responsible for addressing, packaging, and routing functions
- Network Access/Interface Layer -> responsible for placing TCP/IP packets on the network medium and receiving TCP/IP packets off the network medium


OSI Model Layers
- Layer 7: Application Layer -> Deals with the interface between a user and the host computer
- Layer 6: Presentation Layer -> Deals with syntactic representation of data
- Layer 5: Session Layer -> Deals with creating and managing sessions when one application process requests access to another applications process
- Layer 4: Transport Layer -> Deals with data transfer between end systems; flow control for two computers
- Layer 3: Network Layer -> Deals with establishing paths for data between a pair of computers and handling any switching among alternative routes between the computers, as well as with definitions of how to break files (or messages) up into individual packets of data, in such a way that the packets can be transmitted and then reassembled.
- Layer 2: Data Link Layer -> Deals with the transmission of data frames (e.g., packets) over a physical link between network entities
- Layer 1: Physical Layer-> Deals with the physical 



<img src="{{site.baseurl}}/gist/networking/osi_tcp_layer.gif">
