// Refer to the test_flows.json for connections.

// On Start
// Code added here will be run once whenever the node is started.
context.set("timer", false);
node.status({ fill: "grey", shape: "dot", text: "Timer Off" });

// On Messages
// Code added here will be run whenever a message is sent to this node.
if (msg.payload == "1") {
  context.set("timer", true);
  node.status({ fill: "blue", shape: "dot", text: "Timer On" });
} 
else if (msg.payload == '0') {
  context.set("timer", false);
  node.status({ fill: "grey", shape: "dot", text: "Timer Off" });
}
// Relay message ONLY when the timer is ON
// This will prevent the input message from triggering any
// Output from the triggner node.
if(context.get("timer")) {
  return msg;
}