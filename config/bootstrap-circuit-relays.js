/*
  This library contains known circuit relays that new IPFS nodes can use to
  bootstrap themselves into the network and join the pubsub network.
*/
/* eslint camelcase: 0 */

const BOOTSTRAP_BROWSER_CRs = [
  {
    name: 'wss.fullstack.cash',
    multiaddr:
      '/dns4/wss.fullstack.cash/tcp/443/wss/ipfs/QmNZktxkfScScnHCFSGKELH3YRqdxHQ3Le9rAoRLhZ6vgL',
    connected: false
  },
  {
    name: 'ipfs-cr-wss.fullstack.nl',
    multiaddr:
      '/dns4/ipfs-cr-wss.fullstackcash.nl/tcp/443/wss/ipfs/QmRrUu64cAnPntYiUc7xMunLKZgj1XZT5HmqJNtDMqQcD7',
    connected: false
  }
]

const BOOTSTRAP_NODE_CRs = [
  {
    name: 'ipfs.fullstack.cash',
    multiaddr:
      '/ip4/116.203.193.74/tcp/4001/ipfs/QmNZktxkfScScnHCFSGKELH3YRqdxHQ3Le9rAoRLhZ6vgL',
    connected: false
  },
  {
    name: 'chat.psfoundation.cash',
    multiaddr:
      '/ip4/138.68.212.34/tcp/4002/ipfs/QmaUW4oCVPUFLRqeSjvhHwGFJHGWrYWLBEt7WxnexDm3Xa',
    connected: false
  },
  {
    name: 'ipfs-cr.fullstack.nl',
    multiaddr:
      '/ip4/157.90.20.129/tcp/4002/ipfs/QmRrUu64cAnPntYiUc7xMunLKZgj1XZT5HmqJNtDMqQcD7',
    connected: false
  }
]

const bootstrapCircuitRelays = {
  browser: BOOTSTRAP_BROWSER_CRs,
  node: BOOTSTRAP_NODE_CRs
}

module.exports = bootstrapCircuitRelays
