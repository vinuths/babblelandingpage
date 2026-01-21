import React, { useState } from "react";
import { Button } from "react-bootstrap";

const predefinedReplies = {
  hi: "Hello 👋 Welcome to Matrix HR Technologies. I’m here to help you with compliance, payroll, audits, and statutory requirements.",
  help: "If you’re not sure what to ask, no worries 🙂 I can explain compliance, payroll, audits, or guide you to our experts.",
  compliance: "Compliance ensures your organization follows labour laws, avoids penalties, and stays audit-ready.",
  payroll: "Our payroll services ensure accurate salary processing, PF, ESI, and timely filings.",
  audit: "We help organizations prepare for audits with proper registers and documentation.",
  services: "Our services include Establishment Compliance, Payroll, Factory Compliance, Audit Management.",
  contact: "📞 Please visit the Contact page and our experts will assist you.",
  default: "Not sure what to ask? 😊 Try: compliance, payroll, audit, services, or contact.",
};

function ComplianceChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hi 👋 I’m your Compliance Assistant. Type ‘help’ or ‘compliance’ 😊",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const key = input.toLowerCase();
    const reply = predefinedReplies[key] || predefinedReplies.default;

    setMessages([
      ...messages,
      { from: "user", text: input },
      { from: "bot", text: reply },
    ]);
    setInput("");
  };

  return (
    <>
      {/* CHAT BUTTON */}
      <div
        style={{
          position: "fixed",
          bottom: "25px",
          right: "25px",
          zIndex: 9999,
        }}
      >
        <Button
          variant="none"
          onClick={() => setOpen(!open)}
          style={{
            borderRadius: "50%",
            width: "60px",
            height: "60px",
            fontSize: "22px",
            backgroundColor: "#D27147",
            color: "#FFFFFF",
            boxShadow: "0 6px 18px #00000066",
          }}
        >
          💬
        </Button>
      </div>

      {/* CHAT WINDOW */}
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: "100px",
            right: "25px",
            width: "320px",
            background: "#01387",
            borderRadius: "14px",
            boxShadow: "0 10px 30px #00000066",
            zIndex: 9999,
            overflow: "hidden",
          }}
        >
          {/* HEADER */}
          <div
            style={{
              padding: "12px",
              background: "#013879",
              color: "#FFFFFF",
              fontWeight: "600",
            }}
          >
            Compliance Chatbot
          </div>

          {/* MESSAGES */}
          <div
            style={{
              padding: "12px",
              height: "240px",
              overflowY: "auto",
            }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  textAlign: msg.from === "user" ? "right" : "left",
                  marginBottom: "10px",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    padding: "8px 12px",
                    borderRadius: "12px",
                    backgroundColor:
                      msg.from === "user" ? "#D27147" : "#01387",
                    color: "#FFFFFF",
                    fontSize: "0.85rem",
                  }}
                >
                  {msg.text}
                </span>
              </div>
            ))}
          </div>

          {/* INPUT */}
          <div style={{ padding: "10px", display: "flex", gap: "6px" }}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type: compliance, payroll..."
              style={{
                flex: 1,
                padding: "6px",
                borderRadius: "6px",
                border: "none",
              }}
            />
            <Button
              variant="none"
              size="sm"
              onClick={handleSend}
              style={{
                backgroundColor: "#D27147",
                color: "#FFFFFF",
                fontWeight: "600",
              }}
            >
              Send
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

export default ComplianceChatbot;
