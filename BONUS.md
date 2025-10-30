
### **More Setup**

#### **HAProxy**

* Acts as the **traffic entry point** between the client and the backend servers.
* All client requests go through HAProxy first. It performs **load balancing** to distribute requests across multiple servers, preventing any single server from being overloaded.
* You can configure different **load balancing strategies** such as **round-robin**, **least connections**, or **IP hash**.
* The client **does not directly know** about the backend servers — it only communicates with HAProxy.
* HAProxy can also handle **SSL termination**, **security filtering**, and **health checks** for backend servers.

---

#### **WebSocket**

* When using HAProxy, WebSocket connections still go **through HAProxy first**.
* The client’s WebSocket request (`ws://` or `wss://`) is received by HAProxy, which then **forwards (tunnels)** that connection to one of the backend servers.
* After the connection is upgraded, HAProxy keeps the WebSocket session **persistent** to that specific backend (using **sticky sessions**) so real-time data stays in sync.
* This setup allows the client to remain unaware of backend details — HAProxy manages which server it connects to.
* Benefits include:

  * Added **security** (HAProxy can filter and manage connections)
  * **Automatic failover** — if a server becomes unhealthy, new WebSocket connections can be routed elsewhere
  * **Scalability** — supports multiple real-time servers under one domain

---

#### **Master–Slave Database Replication**

* The database layer uses a **Master–Slave (Primary–Replica)** setup for performance and reliability.
* **All write operations (INSERT, UPDATE, DELETE)** go to the **Master database**.
* The Master records every write in its **binary log (binlog)**.
* **Slave databases** continuously read this binlog and **replicate** those changes — keeping their data synchronized with the Master.
* **Read operations (SELECT)** are often handled by the **Slaves**, reducing load on the Master.
* The replication between Master and Slaves happens through **database-level replication protocols**, not WebSockets.
* This setup improves:

  * **Performance** (read load distributed)
  * **Scalability** (can add more Slaves)
  * **Reliability** (data redundancy and failover support)

---
