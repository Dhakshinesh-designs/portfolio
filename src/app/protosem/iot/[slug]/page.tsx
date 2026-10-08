import Link from 'next/link';
import Image from 'next/image';
import IotTaskNavigation from '@/components/IotTaskNavigation';

export default async function IotTaskPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const taskId = resolvedParams.slug.replace('task-', '');

  if (taskId === '1') {
    return (
      <div className="flex flex-col gap-6 w-full max-w-[800px] pt-4 mb-16">
        <div className="flex items-center text-sm text-[var(--text-muted)] gap-2 mb-2">
          <Link href="/protosem" className="hover:underline">Protosem</Link>
          <span>&rsaquo;</span>
          <Link href="/protosem" className="hover:underline">IoT</Link>
          <span>&rsaquo;</span>
          <span className="text-[var(--text-main)]">Task {taskId}</span>
        </div>

        <div className="mb-8">
          <div className="text-[var(--link-title)] font-bold tracking-widest text-xs uppercase mb-3">Task 01</div>
          <h1 className="text-4xl font-extrabold text-[var(--text-main)] mb-3 tracking-tight">
            HTTP LED Web Control
          </h1>
          <div className="flex items-center gap-3 text-sm text-[var(--text-muted)] font-medium">
            <span>Local Wi-Fi</span>
            <span className="text-xs">&bull;</span>
            <span>HTTP REST</span>
            <span className="text-xs">&bull;</span>
            <span>GPIO</span>
            <span className="text-xs">&bull;</span>
            <span>Day 1</span>
          </div>
        </div>

        <IotTaskNavigation currentTask={1} />

        <section className="mb-6">
          <h2 className="text-2xl font-bold text-[var(--text-main)] mb-4">Overview</h2>
          <p className="text-[var(--text-muted)] leading-relaxed text-[15px]">
            In this project, an ESP32 microcontroller is linked to a local Wi-Fi network to host a simple embedded web server. By issuing HTTP GET requests from any local web browser, the built-in LED on the ESP32 can be controlled instantaneously. Using the foundational request-response nature of HTTP, the <code className="bg-[var(--bg-hover)] text-[var(--text-main)] px-1.5 py-0.5 rounded text-sm font-mono">WiFi.h</code> library manages network connectivity while <code className="bg-[var(--bg-hover)] text-[var(--text-main)] px-1.5 py-0.5 rounded text-sm font-mono">WebServer.h</code> monitors port 80 for incoming traffic and directs it to the appropriate handlers. Operating entirely on a local network ensures rapid response times without relying on external cloud infrastructure.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold text-[var(--text-main)] mb-4">Learning Objectives</h2>
          <ul className="space-y-3">
            {[
              "Grasp the fundamentals of the HTTP protocol and RESTful API structures.",
              "Develop a responsive front-end interface that communicates directly with embedded hardware.",
              "Utilize polling techniques to achieve real-time user interface updates.",
              "Gain proficiency in controlling GPIO digital outputs on a microcontroller.",
              "Integrate UI/UX best practices into embedded system dashboards."
            ].map((objective, i) => (
              <li key={i} className="flex items-start gap-3 text-[var(--text-muted)] text-[15px]">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--link-title)] mt-2 shrink-0" />
                <span className="leading-relaxed">{objective}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[var(--text-main)] mb-4">How to Build This</h2>
          <div className="flex flex-col gap-4">
            {[
              "Setup the Arduino IDE and integrate ESP32 board support using the Boards Manager.",
              "Utilize the built-in blue LED connected to GPIO 2, requiring no additional external wiring.",
              "Create a new sketch, insert the provided firmware code, and update it with your local Wi-Fi network credentials.",
              'Configure the IDE by selecting the "ESP32 Dev Module" board and choosing the appropriate COM/serial port.',
              "Upload the code to the board. Afterward, open the Serial Monitor (set to 115200 baud) to find the device's assigned IP address.",
              "Verify the endpoints by navigating to http://<ESP32_IP>/api/on and /api/off using a web browser connected to the same network.",
              "Develop a custom HTML/CSS/JS front-end to interact with these endpoints, implementing a 500ms polling interval for status updates."
            ].map((step, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-7 h-7 shrink-0 rounded-full bg-[var(--bg-hover)] text-[var(--text-main)] text-sm font-semibold flex items-center justify-center mt-0.5">
                  {i + 1}
                </div>
                <p className="text-[var(--text-muted)] text-[15px] leading-relaxed pt-1">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-[var(--border-color)] pt-8">
          <section>
            <h3 className="text-lg font-bold text-[var(--text-main)] mb-4">Hardware Components</h3>
            <div className="flex flex-col gap-3">
              {[
                { name: "ESP32 DevKit V4", desc: "Primary microcontroller" },
                { name: "Micro-USB Data Cable", desc: "For programming & power" },
                { name: "Wi-Fi Network", desc: "Standard 2.4 GHz connection" }
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center text-[15px] border-b border-[var(--border-color)] pb-3 last:border-0 last:pb-0">
                  <span className="font-semibold text-[var(--text-main)]">{item.name}</span>
                  <span className="text-[var(--text-muted)] text-sm">{item.desc}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-lg font-bold text-[var(--text-main)] mb-4">Software Tools</h3>
            <div className="flex flex-col gap-3">
              {[
                { name: "Arduino IDE", desc: "Firmware development" },
                { name: "WiFi.h & WebServer.h", desc: "ESP32 core networking libs" },
                { name: "Web Browser", desc: "HTML/CSS/JS user interface" }
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center text-[15px] border-b border-[var(--border-color)] pb-3 last:border-0 last:pb-0">
                  <span className="font-semibold text-[var(--text-main)]">{item.name}</span>
                  <span className="text-[var(--text-muted)] text-sm">{item.desc}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        <section className="mt-8 pt-8 border-t border-[var(--border-color)]">
          <h3 className="text-lg font-bold text-[var(--text-main)] mb-4">Full Source Code</h3>
          <div className="bg-[#0d1117] border border-[var(--border-color)] rounded-lg p-4 overflow-x-auto">
            <pre className="text-[13px] font-mono leading-relaxed text-[#c9d1d9]">
{`#include <WiFi.h>
#include <WebServer.h>

const char* ssid = "YOUR_WIFI_SSID";
const char* password = "YOUR_WIFI_PASSWORD";

WebServer server(80);
const int ledPin = 2;
bool ledState = false;

void handleOn() {
  digitalWrite(ledPin, HIGH);
  ledState = true;
  server.send(200, "text/plain", "ON");
  Serial.println("LED ON");
}

void handleOff() {
  digitalWrite(ledPin, LOW);
  ledState = false;
  server.send(200, "text/plain", "OFF");
  Serial.println("LED OFF");
}

void setup() {
  Serial.begin(115200);
  pinMode(ledPin, OUTPUT);
  digitalWrite(ledPin, LOW);

  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  server.on("/api/on", handleOn);
  server.on("/api/off", handleOff);
  server.begin();
}

void loop() {
  server.handleClient();
}`}
            </pre>
          </div>
        </section>

        <section className="mt-8 pt-8 border-t border-[var(--border-color)]">
          <h3 className="text-lg font-bold text-[var(--text-main)] mb-4">Media</h3>
          <div className="flex flex-col gap-8">
            <div className="relative w-full aspect-[3/4] md:aspect-video rounded-lg overflow-hidden border border-[var(--border-color)] bg-[var(--bg-main)]">
              {/* NOTE: Place your image named 'esp32-demo.png' in the public folder */}
              <Image 
                src="/esp32-demo.png" 
                alt="ESP32 Board running the Web Server" 
                fill 
                className="object-cover" 
              />
            </div>
            
            <div className="w-full rounded-lg overflow-hidden border border-[var(--border-color)] bg-black">
              {/* NOTE: Place your video named 'esp32-demo.mp4' in the public folder */}
              <video 
                controls 
                className="w-full h-auto max-h-[600px] outline-none"
              >
                <source src="/task 1/WhatsApp Video 2026-10-08 at 7.01.53 PM.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </section>
      </div>
    );
  } else if (taskId === '2') {
    return (
      <div className="flex flex-col gap-6 w-full max-w-[800px] pt-4 mb-16">
        <div className="flex items-center text-sm text-[var(--text-muted)] gap-2 mb-2">
          <Link href="/protosem" className="hover:underline">Protosem</Link>
          <span>&rsaquo;</span>
          <Link href="/protosem" className="hover:underline">IoT</Link>
          <span>&rsaquo;</span>
          <span className="text-[var(--text-main)]">Task {taskId}</span>
        </div>

        <div className="mb-8">
          <div className="text-[var(--link-title)] font-bold tracking-widest text-xs uppercase mb-3">Task 02</div>
          <h1 className="text-4xl font-extrabold text-[var(--text-main)] mb-3 tracking-tight">
            MQTT Cloud Dashboard with Relay Control
          </h1>
          <div className="flex items-center gap-3 text-sm text-[var(--text-muted)] font-medium">
            <span>Adafruit IO</span>
            <span className="text-xs">&bull;</span>
            <span>MQTT Pub/Sub</span>
            <span className="text-xs">&bull;</span>
            <span>230V Relay</span>
            <span className="text-xs">&bull;</span>
            <span>Day 2</span>
          </div>
        </div>

        <IotTaskNavigation currentTask={2} />

        <section className="mb-6">
          <h2 className="text-2xl font-bold text-[var(--text-main)] mb-4">Overview</h2>
          <p className="text-[var(--text-muted)] leading-relaxed text-[15px]">
            This project transitions from a local network HTTP setup to a globally accessible cloud-based publish-subscribe model using MQTT. By leveraging the ESP32 as an MQTT client, the system connects to the Adafruit IO broker and subscribes to a specific data feed. This allows commands to be sent from anywhere in the world. When a message is published to the topic, the ESP32 instantly receives the payload and triggers a connected low-voltage relay, safely switching a high-voltage (230V) AC load like an incandescent bulb. MQTT's lightweight, low-bandwidth footprint makes it ideal for IoT devices, effectively routing real-time data between publishers (dashboards/sensors) and subscribers (microcontrollers) without the overhead of HTTP polling.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold text-[var(--text-main)] mb-4">Learning Objectives</h2>
          <ul className="space-y-3">
            {[
              "Establish global, bidirectional communication with remote hardware over the internet.",
              "Comprehend the differences between the publish-subscribe MQTT architecture and traditional HTTP request-response models.",
              "Implement safe isolation and switching mechanisms to control dangerous 230V AC mains appliances using a 5V/3.3V relay module.",
              "Track and log state changes and sensor telemetry directly to a cloud database for historical analysis.",
              "Construct a dynamic, web-based dashboard interface that reflects device states and telemetry in real-time.",
              "Architect an IoT solution capable of scaling, understanding how a single central broker manages connections from hundreds of edge devices simultaneously."
            ].map((objective, i) => (
              <li key={i} className="flex items-start gap-3 text-[var(--text-muted)] text-[15px]">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--link-title)] mt-2 shrink-0" />
                <span className="leading-relaxed">{objective}</span>
              </li>
            ))}
          </ul>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-[var(--border-color)] pt-8">
          <section>
            <h3 className="text-lg font-bold text-[var(--text-main)] mb-4">Hardware Components</h3>
            <div className="flex flex-col gap-3">
              {[
                { name: "ESP32 DevKit", desc: "Edge IoT Controller" },
                { name: "5V Relay Module", desc: "Load switching & isolation" },
                { name: "230V AC Bulb", desc: "High voltage load" },
                { name: "DHT & LDR Sensors", desc: "Temp, Humidity & Light telemetry" }
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center text-[15px] border-b border-[var(--border-color)] pb-3 last:border-0 last:pb-0">
                  <span className="font-semibold text-[var(--text-main)]">{item.name}</span>
                  <span className="text-[var(--text-muted)] text-sm">{item.desc}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-lg font-bold text-[var(--text-main)] mb-4">Software & Cloud</h3>
            <div className="flex flex-col gap-3">
              {[
                { name: "Adafruit IO", desc: "Cloud MQTT Broker & Feeds" },
                { name: "PubSubClient", desc: "C++ MQTT library for ESP32" },
                { name: "Next.js / React", desc: "Custom Web Dashboard UI" },
                { name: "Chart.js", desc: "Historical data visualization" }
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center text-[15px] border-b border-[var(--border-color)] pb-3 last:border-0 last:pb-0">
                  <span className="font-semibold text-[var(--text-main)]">{item.name}</span>
                  <span className="text-[var(--text-muted)] text-sm">{item.desc}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        <section className="mt-8 pt-8 border-t border-[var(--border-color)]">
          <h3 className="text-lg font-bold text-[var(--text-main)] mb-4">Full Source Code</h3>
          <div className="bg-[#0d1117] border border-[var(--border-color)] rounded-lg p-4 overflow-x-auto">
            <pre className="text-[13px] font-mono leading-relaxed text-[#c9d1d9]">
{`#include <AdafruitIO_WiFi.h>

#define WIFI_SSID "YOUR_WIFI_SSID"
#define WIFI_PASS "YOUR_WIFI_PASSWORD"
#define IO_USERNAME "YOUR_ADAFRUIT_IO_USERNAME"
#define IO_KEY "YOUR_ADAFRUIT_IO_KEY"

AdafruitIO_WiFi io(IO_USERNAME, IO_KEY, WIFI_SSID, WIFI_PASS);
AdafruitIO_Feed *esp = io.feed("esp");

#define RELAY_PIN 26
#define RELAY_ON HIGH
#define RELAY_OFF LOW

void handleESPMessage(AdafruitIO_Data *data) {
  String command = data->toString();
  command.trim().toUpperCase();

  if (command == "ON") {
    digitalWrite(RELAY_PIN, RELAY_ON);
    Serial.println("BULB -> ON");
  }
  else if (command == "OFF") {
    digitalWrite(RELAY_PIN, RELAY_OFF);
    Serial.println("BULB -> OFF");
  }
}

void setup() {
  Serial.begin(115200);
  pinMode(RELAY_PIN, OUTPUT);
  digitalWrite(RELAY_PIN, RELAY_OFF);

  esp->onMessage(handleESPMessage);
  io.connect();

  while (io.status() < AIO_CONNECTED) {
    Serial.print(".");
    delay(500);
  }

  Serial.println("ADAFRUIT IO CONNECTED!");
  esp->get();
}

void loop() {
  io.run();
}`}
            </pre>
          </div>
        </section>

        <section className="mt-8 pt-8 border-t border-[var(--border-color)]">
          <div className="flex items-baseline gap-3 mb-6">
            <span className="text-sm font-bold text-[var(--link-title)]">02</span>
            <h2 className="text-2xl font-bold text-[var(--text-main)]">Concepts</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--border-color)] border border-[var(--border-color)] rounded-lg overflow-hidden">
            {[
              { title: "Adafruit IO", desc: "A cloud IoT platform that stores data in feeds and presents it on dashboards via switches, gauges, and charts." },
              { title: "MQTT", desc: "A lightweight publish/subscribe protocol designed for small devices. Nodes exchange short messages through a broker rather than communicating directly." },
              { title: "Publisher, Subscriber, Broker", desc: "The dashboard switch publishes a message, the ESP32 subscribes to receive it, and Adafruit IO is the broker that passes it between them." },
              { title: "Topic / Feed", desc: "A topic is the named channel messages travel through. In Adafruit IO each feed maps to a topic — for example username/feeds/led." }
            ].map((item, i) => (
              <div key={i} className="bg-[var(--bg-main)] p-4 flex flex-col gap-2">
                <span className="font-semibold text-[var(--text-main)] text-[15px]">{item.title}</span>
                <span className="text-[var(--text-muted)] text-[14px] leading-relaxed">{item.desc}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 pt-8 border-t border-[var(--border-color)]">
          <div className="flex items-baseline gap-3 mb-6">
            <span className="text-sm font-bold text-[var(--link-title)]">03</span>
            <h2 className="text-2xl font-bold text-[var(--text-main)]">System Design</h2>
          </div>
          <div className="flex flex-wrap items-center gap-2 mb-6 text-sm">
            {["Adafruit IO dashboard toggle", "bulb-control feed (MQTT broker)", "ESP32 subscriber", "Relay module", "230V AC Bulb"].map((step, i, arr) => (
              <div key={i} className="flex items-center gap-2">
                <span className="border border-[var(--border-color)] rounded px-3 py-1.5 text-[var(--text-main)] text-[13px]">{step}</span>
                {i < arr.length - 1 && <span className="text-[var(--text-muted)]">→</span>}
              </div>
            ))}
          </div>
          <p className="text-[var(--text-muted)] leading-relaxed text-[15px] mb-6">
            Tapping the switch on the Bulb Control dashboard publishes a value to the <code className="bg-[var(--bg-hover)] text-[var(--text-main)] px-1.5 py-0.5 rounded font-mono text-sm">bulb-control</code> feed. Adafruit IO, acting as the MQTT broker, holds that value. The ESP32 is subscribed to this same feed, so the moment a new value arrives it executes <code className="bg-[var(--bg-hover)] text-[var(--text-main)] px-1.5 py-0.5 rounded font-mono text-sm">processBulbCommand()</code> and switches the relay — no port forwarding or fixed IP required, since the ESP32 only ever reaches out to Adafruit IO's servers.
          </p>
          <div className="bg-[var(--bg-panel)] border border-[var(--border-color)] rounded-lg p-6 overflow-x-auto">
            <div className="flex items-center gap-3 min-w-max">
              {[
                { label: "Dashboard", sub: "toggle switch" },
                { label: "Adafruit IO", sub: "bulb-control feed (MQTT broker)" },
                { label: "ESP32", sub: "MQTT subscriber\nprocessBulbCommand()", highlight: true },
                { label: "Relay Module", sub: "switches AC line" },
                { label: "230V AC Bulb", sub: "", dot: true }
              ].map((node, i, arr) => (
                <div key={i} className="flex items-center gap-3">
                  <div className={`flex flex-col items-center justify-center px-5 py-3 rounded border text-center min-w-[110px] ${node.highlight ? 'border-[var(--link-title)] text-[var(--link-title)]' : 'border-[var(--border-color)] text-[var(--text-main)]'}`}>
                    {node.dot ? <div className="w-4 h-4 rounded-full bg-[var(--link-title)] mb-1" /> : null}
                    <span className="font-semibold text-[13px]">{node.label}</span>
                    {node.sub && <span className="text-[11px] text-[var(--text-muted)] mt-0.5">{node.sub}</span>}
                  </div>
                  {i < arr.length - 1 && <span className="text-[var(--link-title)] text-lg">→</span>}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-8 pt-8 border-t border-[var(--border-color)]">
          <div className="flex items-baseline gap-3 mb-4">
            <span className="text-sm font-bold text-[var(--link-title)]">04</span>
            <h2 className="text-2xl font-bold text-[var(--text-main)]">Code Breakdown</h2>
          </div>
          <p className="text-[var(--text-muted)] text-[15px] mb-6">Key sections, in my own words:</p>
          <ul className="space-y-6">
            <li className="flex flex-col gap-1 text-[15px]">
              <span className="font-semibold text-[var(--text-main)] flex items-center gap-2">
                <span className="text-[var(--link-title)] text-[10px]">&bull;</span> Wi-Fi + Adafruit IO connection
              </span>
              <span className="text-[var(--text-muted)] leading-relaxed ml-4">
                <code className="bg-[var(--bg-hover)] text-[var(--text-main)] px-1.5 py-0.5 rounded font-mono text-sm">connectWifi()</code> joins the network exactly as in Task 1. The <code className="bg-[var(--bg-hover)] text-[var(--text-main)] px-1.5 py-0.5 rounded font-mono text-sm">Adafruit_MQTT_Client</code> object is then configured with the Adafruit IO username and key, so <code className="bg-[var(--bg-hover)] text-[var(--text-main)] px-1.5 py-0.5 rounded font-mono text-sm">connectMQTT()</code> can authenticate to io.adafruit.com on port 1883.
              </span>
            </li>
            <li className="flex flex-col gap-1 text-[15px]">
              <span className="font-semibold text-[var(--text-main)] flex items-center gap-2">
                <span className="text-[var(--link-title)] text-[10px]">&bull;</span> Subscribing to the feed
              </span>
              <span className="text-[var(--text-muted)] leading-relaxed ml-4">
                <code className="bg-[var(--bg-hover)] text-[var(--text-main)] px-1.5 py-0.5 rounded font-mono text-sm">bulbControl</code> is an <code className="bg-[var(--bg-hover)] text-[var(--text-main)] px-1.5 py-0.5 rounded font-mono text-sm">Adafruit_MQTT_Subscribe</code> object pointed at sachinn__s/feeds/bulb-control. Calling <code className="bg-[var(--bg-hover)] text-[var(--text-main)] px-1.5 py-0.5 rounded font-mono text-sm">mqtt.subscribe(&bulbControl)</code> in setup() instructs the broker to forward every new value published to that feed directly to the device.
              </span>
            </li>
            <li className="flex flex-col gap-1 text-[15px]">
              <span className="font-semibold text-[var(--text-main)] flex items-center gap-2">
                <span className="text-[var(--link-title)] text-[10px]">&bull;</span> processBulbCommand()
              </span>
              <span className="text-[var(--text-muted)] leading-relaxed ml-4">
                Since the dashboard toggle can publish several different strings depending on its configuration, the incoming value is trimmed and lowercased before being matched against multiple ON variants (1, on, bulb on, bulbon) and OFF variants (0, off, bulb off, bulboff) before driving RELAY_PIN HIGH or LOW.
              </span>
            </li>
            <li className="flex flex-col gap-1 text-[15px]">
              <span className="font-semibold text-[var(--text-main)] flex items-center gap-2">
                <span className="text-[var(--link-title)] text-[10px]">&bull;</span> Reconnect logic
              </span>
              <span className="text-[var(--text-muted)] leading-relaxed ml-4">
                Every pass through <code className="bg-[var(--bg-hover)] text-[var(--text-main)] px-1.5 py-0.5 rounded font-mono text-sm">loop()</code> checks <code className="bg-[var(--bg-hover)] text-[var(--text-main)] px-1.5 py-0.5 rounded font-mono text-sm">WiFi.status()</code> and <code className="bg-[var(--bg-hover)] text-[var(--text-main)] px-1.5 py-0.5 rounded font-mono text-sm">mqtt.connected()</code> and reconnects whichever one has dropped, before calling <code className="bg-[var(--bg-hover)] text-[var(--text-main)] px-1.5 py-0.5 rounded font-mono text-sm">mqtt.processPackets(1000)</code> to read the subscription queue — keeping the relay in sync even after a brief Wi-Fi hiccup.
              </span>
            </li>
          </ul>
        </section>

        <section className="mt-8 pt-8 border-t border-[var(--border-color)]">
          <div className="flex items-baseline gap-3 mb-6">
            <span className="text-sm font-bold text-[var(--link-title)]">05</span>
            <h2 className="text-2xl font-bold text-[var(--text-main)]">Project Gallery</h2>
          </div>
          <div className="flex flex-col gap-6">
            <div className="w-full rounded-lg overflow-hidden border border-[var(--border-color)] bg-black">
              <video controls className="w-full h-auto max-h-[600px] outline-none">
                <source src="/task2/WhatsApp Video 2026-10-08 at 7.12.22 PM(1).mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="relative w-full rounded-lg overflow-hidden border border-[var(--border-color)] bg-[var(--bg-main)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/task2/Screenshot 2026-10-08 224816.png" alt="Task 2 Dashboard Screenshot 1" className="w-full h-auto object-contain" />
            </div>
            <div className="relative w-full rounded-lg overflow-hidden border border-[var(--border-color)] bg-[var(--bg-main)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/task2/Screenshot 2026-10-08 224830.png" alt="Task 2 Dashboard Screenshot 2" className="w-full h-auto object-contain" />
            </div>
          </div>
        </section>
      </div>
    );
  } else if (taskId === '3') {
    return (
      <div className="flex flex-col gap-6 w-full max-w-[800px] pt-4 mb-16">
        <div className="flex items-center text-sm text-[var(--text-muted)] gap-2 mb-2">
          <Link href="/protosem" className="hover:underline">Protosem</Link>
          <span>&rsaquo;</span>
          <Link href="/protosem" className="hover:underline">IoT</Link>
          <span>&rsaquo;</span>
          <span className="text-[var(--text-main)]">Task {taskId}</span>
        </div>

        <div className="mb-8">
          <div className="text-[var(--link-title)] font-bold tracking-widest text-xs uppercase mb-3">Task 03</div>
          <h1 className="text-4xl font-extrabold text-[var(--text-main)] mb-3 tracking-tight">
            IFTTT + Adafruit IO IoT Automation
          </h1>
          <div className="flex items-center gap-3 text-sm text-[var(--text-muted)] font-medium">
            <span>IFTTT</span>
            <span className="text-xs">&bull;</span>
            <span>Google Assistant</span>
            <span className="text-xs">&bull;</span>
            <span>Voice Control</span>
            <span className="text-xs">&bull;</span>
            <span>Day 3</span>
          </div>
        </div>

        <IotTaskNavigation currentTask={3} />

        <section className="mb-6">
          <h2 className="text-2xl font-bold text-[var(--text-main)] mb-4">Overview</h2>
          <p className="text-[var(--text-muted)] leading-relaxed text-[15px]">
            The objective is to automate the system so it reacts to an event without anyone manually pressing a button. By setting up an IFTTT (If This Then That) applet, we can watch for a specific trigger—like a voice command from Google Assistant—and perform an action in response. Here, the action writes a value directly to an Adafruit IO feed. Since the ESP32 is already subscribed and listening to this feed over MQTT, it reacts instantly to switch the appliance.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold text-[var(--text-main)] mb-4">Concepts</h2>
          <ul className="space-y-3">
            {[
              { title: "IoT Automation", desc: "A system that senses a condition or event and acts on it by itself, with no manual input." },
              { title: "IFTTT", desc: "A service that connects apps and devices through applets built on the rule 'If This, Then That'." },
              { title: "Trigger \u2192 Action", desc: "The trigger is the event being watched; the action is what happens in response. Here the action sends a value to an Adafruit IO feed." },
              { title: "Role of Adafruit IO", desc: "The feed acts as a bridge: IFTTT writes to it, and the ESP32 receives the value over MQTT." }
            ].map((concept, i) => (
              <li key={i} className="flex flex-col text-[15px]">
                <span className="font-semibold text-[var(--text-main)]">{concept.title}</span>
                <span className="text-[var(--text-muted)] leading-relaxed">{concept.desc}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold text-[var(--text-main)] mb-4">System Design</h2>
          <div className="bg-[#0d1117] p-4 rounded-lg border border-[var(--border-color)] mb-4 flex items-center justify-center text-sm text-[var(--text-main)] gap-2 flex-wrap">
            <span className="px-3 py-1 bg-[var(--bg-hover)] rounded border border-[var(--border-color)]">"Okay Google, activate Bulb On"</span>
            <span className="text-[var(--text-muted)]">&rarr;</span>
            <span className="px-3 py-1 bg-[var(--bg-hover)] rounded border border-[var(--border-color)]">IFTTT applet</span>
            <span className="text-[var(--text-muted)]">&rarr;</span>
            <span className="px-3 py-1 bg-[var(--bg-hover)] rounded border border-[var(--border-color)]">bulb-control feed</span>
            <span className="text-[var(--text-muted)]">&rarr;</span>
            <span className="px-3 py-1 bg-[var(--bg-hover)] rounded border border-[var(--border-color)]">ESP32 subscriber</span>
            <span className="text-[var(--text-muted)]">&rarr;</span>
            <span className="px-3 py-1 bg-[var(--bg-hover)] rounded border border-[var(--border-color)]">Relay</span>
            <span className="text-[var(--text-muted)]">&rarr;</span>
            <span className="px-3 py-1 bg-[var(--bg-hover)] rounded border border-[var(--border-color)]">230V AC Bulb</span>
          </div>
          <p className="text-[var(--text-muted)] leading-relaxed text-[15px]">
            Saying the phrase fires a Google Assistant trigger in IFTTT, and the applet's action writes a value straight to the <code className="bg-[var(--bg-hover)] text-[var(--text-main)] px-1.5 py-0.5 rounded font-mono">bulb-control</code> Adafruit IO feed. Adafruit IO, acting as the MQTT broker, holds that value; the ESP32 is subscribed to the same feed, so the instant a new value lands it runs <code className="bg-[var(--bg-hover)] text-[var(--text-main)] px-1.5 py-0.5 rounded font-mono">processBulbCommand()</code> and switches the relay. The ESP32 has no way to tell whether the value came from a person tapping a dashboard switch or a voice command firing an applet—both are just MQTT publishes to a feed it's already listening to.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-[var(--border-color)] pt-8">
          <section>
            <h3 className="text-lg font-bold text-[var(--text-main)] mb-4">Hardware Components</h3>
            <div className="flex flex-col gap-3">
              {[
                { name: "ESP32 Dev Module", desc: "WROOM-32 Controller" },
                { name: "5V Relay Module", desc: "Single-channel isolation" },
                { name: "230V AC Bulb & Holder", desc: "Mains-powered load" },
                { name: "Smart Phone", desc: "Google Assistant for voice trigger" }
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center text-[15px] border-b border-[var(--border-color)] pb-3 last:border-0 last:pb-0">
                  <span className="font-semibold text-[var(--text-main)]">{item.name}</span>
                  <span className="text-[var(--text-muted)] text-sm">{item.desc}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-lg font-bold text-[var(--text-main)] mb-4">Software & Platforms</h3>
            <div className="flex flex-col gap-3">
              {[
                { name: "IFTTT", desc: "Applet with Google Assistant & Adafruit" },
                { name: "Adafruit IO", desc: "MQTT Broker & bulb-control feed" },
                { name: "Arduino IDE 2.3.10", desc: "Firmware development" },
                { name: "Adafruit_MQTT", desc: "Client library for ESP32" }
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center text-[15px] border-b border-[var(--border-color)] pb-3 last:border-0 last:pb-0">
                  <span className="font-semibold text-[var(--text-main)]">{item.name}</span>
                  <span className="text-[var(--text-muted)] text-sm">{item.desc}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        <section className="mt-8 pt-8 border-t border-[var(--border-color)]">
          <h3 className="text-lg font-bold text-[var(--text-main)] mb-4">IFTTT Configuration</h3>
          <div className="flex flex-col gap-4">
            {[
              "In IFTTT, create a new applet and set the trigger to Google Assistant \u2192 Activate scene, then connect the Google Assistant service to your account.",
              "Choose Adafruit \u2192 Send data to Adafruit IO as the action, authorizing IFTTT to read and write to your Adafruit IO feed.",
              "Set the action's feed to bulb-control and specify the data to save as 1, then review and finish the applet.",
              "Repeat this same process for a second applet using the scene name 'Bulb off', but send 0 instead."
            ].map((step, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-7 h-7 shrink-0 rounded-full bg-[var(--bg-hover)] text-[var(--text-main)] text-sm font-semibold flex items-center justify-center mt-0.5">
                  {i + 1}
                </div>
                <p className="text-[var(--text-muted)] text-[15px] leading-relaxed pt-1">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 pt-8 border-t border-[var(--border-color)]">
          <h3 className="text-lg font-bold text-[var(--text-main)] mb-4">Wiring / Setup</h3>
          <p className="text-[var(--text-muted)] leading-relaxed text-[15px] mb-4">
            This involves mains-voltage wiring on the relay's COM to NO pins. The ESP32 (3.3V/5V logic) never touches the mains power; it only safely switches the relay's internal coil via GPIO 23. The physical circuit remains completely unchanged from Task 2. When IFTTT is added on top, the relay and bulb are still driven purely by whatever value lands on <code className="bg-[var(--bg-hover)] text-[var(--text-main)] px-1.5 py-0.5 rounded font-mono">RELAY_PIN</code>, regardless of whether a human clicked a button or an applet triggered it.
          </p>
          <div className="overflow-x-auto border border-[var(--border-color)] rounded-lg">
            <table className="w-full text-left text-sm text-[var(--text-muted)]">
              <thead className="bg-[var(--bg-hover)] text-[var(--text-main)] uppercase text-xs">
                <tr>
                  <th className="px-4 py-3 font-semibold tracking-wider">ESP32 PIN</th>
                  <th className="px-4 py-3 font-semibold tracking-wider">CONNECTS TO</th>
                  <th className="px-4 py-3 font-semibold tracking-wider">SIGNAL</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border-color)]">
                <tr>
                  <td className="px-4 py-3 font-mono">GPIO 23</td>
                  <td className="px-4 py-3">Relay module <strong className="text-[var(--text-main)]">IN</strong></td>
                  <td className="px-4 py-3">Control signal (logic level)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono">5V</td>
                  <td className="px-4 py-3">Relay module <strong className="text-[var(--text-main)]">VCC</strong></td>
                  <td className="px-4 py-3">5V power</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono">GND</td>
                  <td className="px-4 py-3">Relay module <strong className="text-[var(--text-main)]">GND</strong></td>
                  <td className="px-4 py-3">Common ground</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono">Mains Live Wire</td>
                  <td className="px-4 py-3" colSpan={2}>
                    Runs through relay <strong className="text-[var(--text-main)]">COM &rarr; NO</strong> in series with the bulb, same as Task 2 — unchanged for this task.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-8 pt-8 border-t border-[var(--border-color)]">
          <h3 className="text-lg font-bold text-[var(--text-main)] mb-4">Full Source Code</h3>
          <div className="bg-[#0d1117] border border-[var(--border-color)] rounded-lg p-4 overflow-x-auto">
            <pre className="text-[13px] font-mono leading-relaxed text-[#c9d1d9]">
{`// task3_ifttt_automation.ino
#include <WiFi.h>
#include "Adafruit_MQTT.h"
#include "Adafruit_MQTT_Client.h"

// =================================================
// Wi-Fi
// =================================================

#define WIFI_SSID "YOUR_WIFI_NAME"
#define WIFI_PASS "YOUR_WIFI_PASSWORD"

// =================================================
// Adafruit IO
// =================================================

#define AIO_SERVER      "io.adafruit.com"
#define AIO_SERVERPORT  1883
#define AIO_USERNAME    "sachinn__s"
#define AIO_KEY         "YOUR_NEW_ADAFRUIT_IO_KEY"

// =================================================
// RELAY
// =================================================

#define RELAY_PIN 23

// Relay logic
#define RELAY_ON  HIGH
#define RELAY_OFF LOW

// =================================================
// MQTT
// =================================================

WiFiClient client;

Adafruit_MQTT_Client mqtt(
  &client,
  AIO_SERVER,
  AIO_SERVERPORT,
  AIO_USERNAME,
  AIO_KEY
);

// =================================================
// BULB FEED
// =================================================

Adafruit_MQTT_Subscribe bulbControl =
  Adafruit_MQTT_Subscribe(
    &mqtt,
    AIO_USERNAME "/feeds/bulb-control"
  );

// =================================================
// CONNECT TO WIFI
// =================================================

void connectWiFi() {

  Serial.print("Connecting to WiFi");

  WiFi.begin(WIFI_SSID, WIFI_PASS);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println();
  Serial.println("WiFi Connected!");
  Serial.print("IP Address: ");
  Serial.println(WiFi.localIP());
}

// =================================================
// CONNECT TO ADAFRUIT IO
// =================================================

void connectMQTT() {

  while (!mqtt.connected()) {

    Serial.print("Connecting to Adafruit IO...");

    int8_t ret = mqtt.connect();

    if (ret == 0) {
      Serial.println("Connected to Adafruit IO!");
    }
    else {
      Serial.print("Failed, error = ");
      Serial.println(mqtt.connectErrorString(ret));

      mqtt.disconnect();
      delay(5000);
    }
  }
}

// =================================================
// PROCESS BULB COMMAND
// =================================================

void processBulbCommand(String command) {

  command.trim();
  command.toLowerCase();

  Serial.print("Received command: ");
  Serial.println(command);

  // -------------------------
  // BULB ON
  // -------------------------

  if (command == "1" ||
      command == "on" ||
      command == "bulb on" ||
      command == "bulbon") {

    digitalWrite(RELAY_PIN, RELAY_ON);

    Serial.println(">>> BULB ON");
  }

  // -------------------------
  // BULB OFF
  // -------------------------

  else if (command == "0" ||
           command == "off" ||
           command == "bulb off" ||
           command == "bulb of" ||
           command == "bulboff" ||
           command == "of") {

    digitalWrite(RELAY_PIN, RELAY_OFF);

    Serial.println(">>> BULB OFF");
  }

  // -------------------------
  // UNKNOWN
  // -------------------------

  else {

    Serial.print("Unknown command: ");
    Serial.println(command);
  }
}

// =================================================
// SETUP
// =================================================

void setup() {

  Serial.begin(115200);

  delay(1000);

  Serial.println();
  Serial.println("================================");
  Serial.println("ESP32 BULB CONTROL");
  Serial.println("================================");

  // Relay setup
  pinMode(RELAY_PIN, OUTPUT);

  // Start with bulb OFF
  digitalWrite(RELAY_PIN, RELAY_OFF);

  // WiFi
  connectWiFi();

  // Subscribe to feed
  mqtt.subscribe(&bulbControl);

  // MQTT
  connectMQTT();

  Serial.println("System ready!");
}

// =================================================
// LOOP
// =================================================

void loop() {

  // Reconnect WiFi if necessary
  if (WiFi.status() != WL_CONNECTED) {
    connectWiFi();
  }

  // Reconnect MQTT if necessary
  if (!mqtt.connected()) {
    connectMQTT();
  }

  // Keep MQTT connection alive
  mqtt.processPackets(1000);

  // Check for new feed value
  Adafruit_MQTT_Subscribe *subscription;

  while ((subscription = mqtt.readSubscription(100)) != NULL) {

    if (subscription == &bulbControl) {

      String command = String((char *)bulbControl.lastread);

      processBulbCommand(command);
    }
  }
}`}
            </pre>
          </div>
        </section>

        <section className="mt-8 pt-8 border-t border-[var(--border-color)]">
          <h3 className="text-lg font-bold text-[var(--text-main)] mb-6">Code Breakdown</h3>
          <ul className="space-y-6">
            <li className="flex flex-col gap-1 text-[15px]">
              <span className="font-semibold text-[var(--text-main)]">Wi-Fi & Adafruit IO Connection</span>
              <span className="text-[var(--text-muted)] leading-relaxed">
                The <code className="bg-[var(--bg-hover)] text-[var(--text-main)] px-1.5 py-0.5 rounded font-mono text-sm">connectWiFi()</code> function connects to the local network and logs the assigned IP. Using the Adafruit IO credentials, the <code className="bg-[var(--bg-hover)] text-[var(--text-main)] px-1.5 py-0.5 rounded font-mono text-sm">Adafruit_MQTT_Client</code> is authenticated with <code className="bg-[var(--bg-hover)] text-[var(--text-main)] px-1.5 py-0.5 rounded font-mono text-sm">connectMQTT()</code>, ensuring a secure link to the broker on port 1883 with a 5-second retry if it fails.
              </span>
            </li>
            <li className="flex flex-col gap-1 text-[15px]">
              <span className="font-semibold text-[var(--text-main)]">Subscribing to the IFTTT Feed</span>
              <span className="text-[var(--text-muted)] leading-relaxed">
                The <code className="bg-[var(--bg-hover)] text-[var(--text-main)] px-1.5 py-0.5 rounded font-mono text-sm">bulbControl</code> variable is mapped to the <code className="bg-[var(--bg-hover)] text-[var(--text-main)] px-1.5 py-0.5 rounded font-mono text-sm">bulb-control</code> feed. When <code className="bg-[var(--bg-hover)] text-[var(--text-main)] px-1.5 py-0.5 rounded font-mono text-sm">mqtt.subscribe()</code> is called, the broker pushes any new updates directly to the board. The beauty of MQTT is that the ESP32 doesn't care if the update came from a dashboard button click or an IFTTT voice trigger—it processes them identically.
              </span>
            </li>
            <li className="flex flex-col gap-1 text-[15px]">
              <span className="font-semibold text-[var(--text-main)]">Processing the Commands</span>
              <span className="text-[var(--text-muted)] leading-relaxed">
                In <code className="bg-[var(--bg-hover)] text-[var(--text-main)] px-1.5 py-0.5 rounded font-mono text-sm">processBulbCommand()</code>, the incoming payload is cleaned, lowercased, and checked against a variety of acceptable ON/OFF phrases (like "1", "on", "bulb on", etc.). Since IFTTT was set to send a simple "1" or "0", the existing function logic works perfectly without requiring new handlers for voice commands.
              </span>
            </li>
            <li className="flex flex-col gap-1 text-[15px]">
              <span className="font-semibold text-[var(--text-main)]">Serial Logging for Debugging</span>
              <span className="text-[var(--text-muted)] leading-relaxed">
                Every processed command is printed out to the Serial Monitor. This provides immediate, physical verification that the IFTTT voice-triggered payloads successfully traveled from Google Assistant, through Adafruit IO, and down to the microcontroller.
              </span>
            </li>
            <li className="flex flex-col gap-1 text-[15px]">
              <span className="font-semibold text-[var(--text-main)]">Robust Reconnection Logic</span>
              <span className="text-[var(--text-muted)] leading-relaxed">
                Within the main <code className="bg-[var(--bg-hover)] text-[var(--text-main)] px-1.5 py-0.5 rounded font-mono text-sm">loop()</code>, the system constantly verifies both Wi-Fi and MQTT states. If either drops, it seamlessly reconnects. It then pings the broker to stay alive and checks the subscription queue for incoming triggers, ensuring the hardware stays synchronized even after network hiccups.
              </span>
            </li>
          </ul>
        </section>

        <section className="mt-8 pt-8 border-t border-[var(--border-color)]">
          <h3 className="text-lg font-bold text-[var(--text-main)] mb-6">Hardware Setup</h3>
          <div className="flex flex-col gap-3">
            <div className="w-full rounded-lg overflow-hidden border border-[var(--border-color)] bg-black">
              <video 
                controls 
                className="w-full h-auto max-h-[600px] outline-none"
              >
                <source src="/WhatsApp%20Video%202026-10-08%20at%207.12.22%20PM.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="text-sm text-[var(--text-muted)] italic text-center">
              The physical setup is identical to Task 2; the ESP32 drives the relay module while safely isolated from the 230V mains line.
            </p>
          </div>
        </section>

        <section className="mt-8 pt-8 border-t border-[var(--border-color)]">
          <div className="flex items-baseline gap-3 mb-6">
            <span className="text-sm font-bold text-[var(--link-title)]">06</span>
            <h2 className="text-2xl font-bold text-[var(--text-main)]">Project Gallery</h2>
          </div>
          <div className="flex flex-col gap-6">
            {[
              "Screenshot 2026-10-09 002743.png",
              "Screenshot 2026-10-09 002820.png",
              "Screenshot 2026-10-09 002900.png",
              "New folder/Screenshot 2026-10-09 003252.png"
            ].map((filename, i) => (
              <div key={i} className="relative w-full rounded-lg overflow-hidden border border-[var(--border-color)] bg-[var(--bg-main)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/task 3/${filename}`}
                  alt={`Task 3 Screenshot ${i + 1}`}
                  className="w-full h-auto object-contain"
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  } else if (taskId === '4') {
    return (
      <div className="flex flex-col w-full max-w-[800px] pt-4 pb-16">
        <div className="flex items-center text-sm text-[var(--text-muted)] gap-2 mb-8">
          <Link href="/protosem" className="hover:underline">Protosem</Link>
          <span>&rsaquo;</span>
          <Link href="/protosem" className="hover:underline">IoT</Link>
          <span>&rsaquo;</span>
          <span className="text-[var(--text-main)]">Task 4</span>
        </div>

        <div className="flex flex-col gap-2 mb-10">
          
          <h1 className="text-6xl font-black text-[var(--text-main)] uppercase tracking-tight leading-[0.85]">
            FIREBASE IOT
            <br />
            MONITORING
            <br />
            DASHBOARD
          </h1>
        </div>

        <IotTaskNavigation currentTask={4} />

        <section className="mt-12 pt-8 border-t border-[var(--border-color)]">
          <div className="flex items-baseline gap-3 mb-6">
            <span className="text-sm font-bold text-[var(--link-title)]">01</span>
            <h2 className="text-2xl font-bold text-[var(--text-main)]">Overview</h2>
          </div>
          <p className="text-[var(--text-muted)] leading-relaxed text-[15px] mb-6">
            The objective is a login-protected web dashboard that reads live data — temperature, humidity, ambient light and device status — from a Firebase Realtime Database and can write a bulb control command back. This task focuses entirely on the cloud/dashboard portion of the system: building the database, configuring authentication, and developing the frontend page that interfaces with it. Getting a physical sensor or ESP32 to actually write that data is a separate, later task — here the dashboard is built and validated purely against the database itself.
          </p>
          <div className="flex gap-4">
            <a href="#" className="px-5 py-2 rounded-full border border-[var(--link-title)] text-xs font-bold uppercase tracking-wider hover:bg-[var(--link-title)]/10 transition-colors">
              Login Page &rarr;
            </a>
            <a href="#" className="px-5 py-2 rounded-full border border-[var(--link-title)] text-xs font-bold uppercase tracking-wider hover:bg-[var(--link-title)]/10 transition-colors">
              Dashboard &rarr;
            </a>
          </div>
        </section>

        <section className="mt-8 pt-8 border-t border-[var(--border-color)]">
          <div className="flex items-baseline gap-3 mb-6">
            <span className="text-sm font-bold text-[var(--link-title)]">02</span>
            <h2 className="text-2xl font-bold text-[var(--text-main)]">Concepts</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--border-color)] border border-[var(--border-color)] rounded-lg overflow-hidden">
            <div className="bg-[var(--bg-main)] p-4 flex flex-col gap-2">
              <h4 className="font-bold text-sm text-[var(--text-main)]">Cloud computing</h4>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                Utilizing computing resources, storage, and services over the internet instead of owning the physical hardware.
              </p>
            </div>
            <div className="bg-[var(--bg-main)] p-4 flex flex-col gap-2">
              <h4 className="font-bold text-sm text-[var(--text-main)]">IaaS, PaaS, SaaS, BaaS</h4>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                IaaS rents raw servers and storage. PaaS gives a platform to run your own code. SaaS is finished software you just use. BaaS supplies ready-made backend features like databases and auth; Firebase is BaaS.
              </p>
            </div>
            <div className="bg-[var(--bg-main)] p-4 flex flex-col gap-2">
              <h4 className="font-bold text-sm text-[var(--text-main)]">Cloud platform and database</h4>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                A cloud platform hosts services for you. A database stores structured data so it can be saved and securely accessed later.
              </p>
            </div>
            <div className="bg-[var(--bg-main)] p-4 flex flex-col gap-2">
              <h4 className="font-bold text-sm text-[var(--text-main)]">Firebase Realtime Database</h4>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                A cloud database stored as JSON that pushes changes to every connected client instantly, allowing the dashboard to update live as soon as a value changes.
              </p>
            </div>
            <div className="bg-[var(--bg-main)] p-4 flex flex-col gap-2">
              <h4 className="font-bold text-sm text-[var(--text-main)]">Cloud-based dashboard</h4>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                A web interface that reads live data from the cloud and visualizes it, complete with controls to send commands back to the system.
              </p>
            </div>
            <div className="bg-[var(--bg-main)] p-4 flex flex-col gap-2">
              <h4 className="font-bold text-sm text-[var(--text-main)]">Authentication vs Authorization</h4>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                Authentication proves who you are (login). Authorization decides what you are allowed to do (database rules).
              </p>
            </div>
            <div className="bg-[var(--bg-main)] p-4 hidden md:block lg:col-span-2"></div>
          </div>
        </section>

        <section className="mt-8 pt-8 border-t border-[var(--border-color)]">
          <div className="flex items-baseline gap-3 mb-6">
            <span className="text-sm font-bold text-[var(--link-title)]">03</span>
            <h2 className="text-2xl font-bold text-[var(--text-main)]">System Design</h2>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="px-4 py-2 rounded border border-[var(--border-color)] bg-[var(--bg-main)] text-sm font-medium">Firebase Realtime Database</div>
              <div className="text-[var(--link-title)] font-bold">&rlarr;</div>
              <div className="px-4 py-2 rounded border border-[var(--border-color)] bg-[var(--bg-main)] text-sm font-medium">Login dashboard</div>
            </div>
            <p className="text-[var(--text-muted)] leading-relaxed text-[15px] mb-4">
              The dashboard listens live on sensors and status and renders whatever is there; it writes to control when the mode or bulb toggle is changed. A separate device writing into sensors/status and reading control is what a later task connects — this task only has to prove the dashboard side works correctly against the database.
            </p>
            
            {/* System Architecture Diagram Recreation */}
            <div className="border border-[var(--border-color)] rounded-xl p-8 bg-[#0a0a0a] flex flex-col md:flex-row items-center justify-center gap-12 overflow-x-auto">
              {/* Firebase Node */}
              <div className="relative border-2 border-[var(--link-title)] rounded-lg p-6 w-[280px] shrink-0 bg-[#0d0d0d]">
                <h4 className="text-[var(--link-title)] font-bold text-center mb-6">Firebase Realtime Database</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="border border-[var(--border-color)] rounded p-4 flex items-center justify-center text-sm font-medium text-[var(--text-main)]">sensors</div>
                  <div className="border border-[var(--border-color)] rounded p-4 flex items-center justify-center text-sm font-medium text-[var(--text-main)]">control</div>
                  <div className="border border-[var(--border-color)] rounded p-4 flex items-center justify-center text-sm font-medium text-[var(--text-main)]">logs</div>
                  <div className="border border-[var(--border-color)] rounded p-4 flex items-center justify-center text-sm font-medium text-[var(--text-main)]">status</div>
                </div>
                <div className="text-xs text-[var(--text-muted)] text-center mt-6">rules: read/write gated on auth != null</div>
              </div>

              {/* Arrows */}
              <div className="flex flex-col gap-6 items-center shrink-0">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-[var(--text-muted)] whitespace-nowrap">reads (listeners)</span>
                  <div className="w-16 h-px bg-[var(--link-title)] relative">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-y-[4px] border-y-transparent border-l-[6px] border-l-[var(--link-title)]"></div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-16 h-px bg-[var(--link-title)] relative">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0 h-0 border-y-[4px] border-y-transparent border-r-[6px] border-r-[var(--link-title)]"></div>
                  </div>
                  <span className="text-xs text-[var(--text-muted)] whitespace-nowrap">writes (control)</span>
                </div>
              </div>

              {/* Dashboard Node */}
              <div className="border border-[var(--border-color)] rounded-lg p-6 w-[280px] shrink-0 bg-[#0d0d0d]">
                <h4 className="text-[var(--text-main)] font-bold text-center mb-6">Login Dashboard</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="border border-[var(--border-color)] rounded p-4 flex items-center justify-center text-sm font-medium text-[var(--text-main)]">Login (Auth)</div>
                  <div className="border border-[var(--border-color)] rounded p-4 flex items-center justify-center text-sm font-medium text-[var(--text-main)]">Live cards</div>
                  <div className="border border-[var(--border-color)] rounded p-4 flex items-center justify-center text-sm font-medium text-[var(--text-main)]">Mode / Bulb</div>
                  <div className="border border-[var(--border-color)] rounded p-4 flex items-center justify-center text-sm font-medium text-[var(--text-main)]">History / CSV</div>
                </div>
                <div className="text-xs text-[var(--text-muted)] text-center mt-6">dashboard.html, gated by index.html sign-in</div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 pt-8 border-t border-[var(--border-color)]">
          <div className="flex items-baseline gap-3 mb-6">
            <span className="text-sm font-bold text-[var(--link-title)]">04</span>
            <h2 className="text-2xl font-bold text-[var(--text-main)]">Software & Platforms</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border border-[var(--border-color)] rounded-lg p-6">
            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-[var(--text-main)]">Firebase</h4>
              <ul className="space-y-3">
                <li className="flex gap-3 text-[15px] text-[var(--text-muted)] items-start">
                  <span className="text-[var(--link-title)] mt-1">&bull;</span>
                  Firebase project (Authentication + Realtime Database + Hosting)
                </li>
                <li className="flex gap-3 text-[15px] text-[var(--text-muted)] items-start">
                  <span className="text-[var(--link-title)] mt-1">&bull;</span>
                  Firebase CLI (firebase-tools) for hosting deploys
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-[var(--text-main)]">Dashboard</h4>
              <ul className="space-y-3">
                <li className="flex gap-3 text-[15px] text-[var(--text-muted)] items-start">
                  <span className="text-[var(--link-title)] mt-1">&bull;</span>
                  HTML/CSS/JS dashboard using the Firebase web SDK
                </li>
                <li className="flex gap-3 text-[15px] text-[var(--text-muted)] items-start">
                  <span className="text-[var(--link-title)] mt-1">&bull;</span>
                  Firebase Authentication (Email/Password) for the login page
                </li>
                <li className="flex gap-3 text-[15px] text-[var(--text-muted)] items-start">
                  <span className="text-[var(--link-title)] mt-1">&bull;</span>
                  Realtime Database listeners for live readings, writes for bulb control
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-8 pt-8 border-t border-[var(--border-color)]">
          <div className="flex items-baseline gap-3 mb-4">
            <span className="text-sm font-bold text-[var(--link-title)]">05</span>
            <h2 className="text-2xl font-bold text-[var(--text-main)]">Full Source Code</h2>
          </div>
          <div className="bg-[#0d1117] border border-[var(--border-color)] rounded-lg p-4 overflow-x-auto">
            <pre className="text-[13px] font-mono leading-relaxed text-[#c9d1d9]">
{`// Firebase initialization
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getDatabase, ref, onValue, set } from 'firebase/database';

const firebaseConfig = { /* your config */ };
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

// Real-time listener for sensor data
onValue(ref(db, 'sensorData'), (snapshot) => {
  const data = snapshot.val();
  const latestReading = Object.values(data).pop();

  document.getElementById('tempCard').textContent = latestReading.temperature + '°C';
  document.getElementById('humidityCard').textContent = latestReading.humidity + '%';
  document.getElementById('ldrCard').textContent = latestReading.ldr;
});

// Bulb toggle (writes to Firebase)
function toggleBulb() {
  const bulbOrb = document.getElementById('bulbOrb');
  const isOn = bulbOrb.classList.contains('on');

  set(ref(db, 'appliances/bulbState'), !isOn);
  bulbOrb.classList.toggle('on');
}

// Listen for bulb state changes (syncs with ESP32)
onValue(ref(db, 'appliances/bulbState'), (snapshot) => {
  const isOn = snapshot.val();
  const bulbOrb = document.getElementById('bulbOrb');

  if (isOn) {
    bulbOrb.classList.add('on');
  } else {
    bulbOrb.classList.remove('on');
  }
});

// Mode selector (writes to Firebase)
function setMode(mode) {
  set(ref(db, 'settings/mode'), mode);
}

// LDR threshold slider (writes to Firebase)
function setThreshold(value) {
  set(ref(db, 'settings/ldrThreshold'), parseInt(value));
  document.getElementById('thresholdValue').textContent = value;
}

// CSV export
function exportCSV() {
  onValue(ref(db, 'sensorData'), (snapshot) => {
    const data = snapshot.val();
    let csv = 'Timestamp,Temperature,Humidity,LDR,Bulb State\\n';

    Object.values(data).forEach(row => {
      csv += \`\${new Date(row.timestamp).toLocaleString()},\${row.temperature},\${row.humidity},\${row.ldr},\${row.bulbState}\\n\`;
    });

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'forge_sensor_data.csv';
    a.click();
  });
}`}
            </pre>
          </div>
        </section>

        <section className="mt-8 pt-8 border-t border-[var(--border-color)]">
          <div className="flex items-baseline gap-3 mb-6">
            <span className="text-sm font-bold text-[var(--link-title)]">06</span>
            <h2 className="text-2xl font-bold text-[var(--text-main)]">Implementation Breakdown</h2>
          </div>
          <p className="text-[var(--text-muted)] text-[15px] mb-6">Key sections in my own words:</p>
          <ul className="space-y-6">
            <li className="flex flex-col gap-1 text-[15px]">
              <span className="font-semibold text-[var(--text-main)] flex items-center gap-2">
                <span className="text-[var(--link-title)] text-[10px]">&bull;</span> Firebase web SDK config and initialization
              </span>
              <span className="text-[var(--text-muted)] leading-relaxed ml-4">
                The dashboard loads the Firebase app config generated when the web app was registered, initializing Auth and the Realtime Database on page load before executing any other logic.
              </span>
            </li>
            <li className="flex flex-col gap-1 text-[15px]">
              <span className="font-semibold text-[var(--text-main)] flex items-center gap-2">
                <span className="text-[var(--link-title)] text-[10px]">&bull;</span> Login page
              </span>
              <span className="text-[var(--text-muted)] leading-relaxed ml-4">
                A separate sign-in screen gates the dashboard. The <code className="bg-[var(--bg-hover)] text-[var(--text-main)] px-1.5 py-0.5 rounded font-mono text-sm">signInWithEmailAndPassword</code> method verifies credentials against the Authentication users, and only redirects to the dashboard upon successful sign-in.
              </span>
            </li>
            <li className="flex flex-col gap-1 text-[15px]">
              <span className="font-semibold text-[var(--text-main)] flex items-center gap-2">
                <span className="text-[var(--link-title)] text-[10px]">&bull;</span> Live listeners on sensors and status
              </span>
              <span className="text-[var(--text-muted)] leading-relaxed ml-4">
                Active <code className="bg-[var(--bg-hover)] text-[var(--text-main)] px-1.5 py-0.5 rounded font-mono text-sm">onValue()</code> listeners on these nodes instantly update the UI cards (Temperature, Humidity, LDR) whenever a value changes, and flip the device banner status. Without a device writing to these nodes yet, the UI handles the null states gracefully.
              </span>
            </li>
            <li className="flex flex-col gap-1 text-[15px]">
              <span className="font-semibold text-[var(--text-main)] flex items-center gap-2">
                <span className="text-[var(--link-title)] text-[10px]">&bull;</span> Mode toggle and bulb switch
              </span>
              <span className="text-[var(--text-muted)] leading-relaxed ml-4">
                Interacting with the Manual/Auto switch or the Bulb toggle immediately writes to the <code className="bg-[var(--bg-hover)] text-[var(--text-main)] px-1.5 py-0.5 rounded font-mono text-sm">control</code> node. The dashboard's UI state and the cloud database stay synchronized, independent of any hardware listening on the other end.
              </span>
            </li>
            <li className="flex flex-col gap-1 text-[15px]">
              <span className="font-semibold text-[var(--text-main)] flex items-center gap-2">
                <span className="text-[var(--link-title)] text-[10px]">&bull;</span> Historical Data table and CSV export
              </span>
              <span className="text-[var(--text-muted)] leading-relaxed ml-4">
                The data table queries the <code className="bg-[var(--bg-hover)] text-[var(--text-main)] px-1.5 py-0.5 rounded font-mono text-sm">logs</code> node, ordering by timestamp. It displays a loading state until the rows populate. A dedicated export button then converts whatever is currently loaded in the table into a downloadable CSV file.
              </span>
            </li>
          </ul>
        </section>

        <section className="mt-8 pt-8 border-t border-[var(--border-color)]">
          <div className="flex items-baseline gap-3 mb-6">
            <span className="text-sm font-bold text-[var(--link-title)]">07</span>
            <h2 className="text-2xl font-bold text-[var(--text-main)]">Project Gallery</h2>
          </div>
          <div className="flex flex-col gap-6">
            {[
              "Screenshot 2026-10-08 203845.png",
              "Screenshot 2026-10-08 203907.png",
              "Screenshot 2026-10-08 203939.png",
              "Screenshot 2026-10-08 203959.png",
              "Screenshot 2026-10-08 235610.png"
            ].map((filename, i) => (
              <div key={i} className="relative w-full rounded-lg overflow-hidden border border-[var(--border-color)] bg-[var(--bg-main)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={`/task 4/${filename}`} 
                  alt={`Task 4 Dashboard Screenshot ${i + 1}`} 
                  className="w-full h-auto object-contain"
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  } else if (taskId === '5') {
    return (
      <div className="flex flex-col w-full max-w-[800px] pt-4 pb-16">
        <div className="flex items-center text-sm text-[var(--text-muted)] gap-2 mb-8">
          <Link href="/protosem" className="hover:underline">Protosem</Link>
          <span>&rsaquo;</span>
          <Link href="/protosem" className="hover:underline">IoT</Link>
          <span>&rsaquo;</span>
          <span className="text-[var(--text-main)]">Task 5</span>
        </div>

        <div className="flex flex-col gap-2 mb-10">
          
          <h1 className="text-6xl font-black text-[var(--text-main)] uppercase tracking-tight leading-[0.85]">
            FIREBASE LOGGING,
            <br />
            AUTOMATION &amp; DATA
            <br />
            EXPORT
          </h1>
        </div>

        <IotTaskNavigation currentTask={5} />

        <section className="mt-12 pt-8 border-t border-[var(--border-color)]">
          <div className="flex items-baseline gap-3 mb-6">
            <span className="text-sm font-bold text-[var(--link-title)]">01</span>
            <h2 className="text-2xl font-bold text-[var(--text-main)]">Overview</h2>
          </div>
          <p className="text-[var(--text-muted)] leading-relaxed text-[15px] mb-6">
            This is the complete, finished IoT system. It monitors temperature, humidity and ambient light, switches the bulb either manually from the dashboard or automatically based on temperature and humidity thresholds, logs every sensor reading with a server-side timestamp to Firebase, and lets the user view history and download it as a CSV file. This task builds directly on Task 4 — using the same project, the same login credentials, and the same <code className="bg-[var(--bg-hover)] text-[var(--text-main)] px-1.5 py-0.5 rounded font-mono text-sm">sensors/control/logs/status</code> database structure — with the automation and logging/export pipeline now wired end to end from the ESP32 hardware.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href="#" className="px-5 py-2 rounded-full border border-[var(--link-title)] text-xs font-bold uppercase tracking-wider hover:bg-[var(--bg-hover)] transition-colors text-[var(--text-main)]">Login Page &rarr;</a>
            <a href="#" className="px-5 py-2 rounded-full border border-[var(--link-title)] text-xs font-bold uppercase tracking-wider hover:bg-[var(--bg-hover)] transition-colors text-[var(--text-main)]">Dashboard &rarr;</a>
          </div>
        </section>

        <section className="mt-8 pt-8 border-t border-[var(--border-color)]">
          <div className="flex items-baseline gap-3 mb-6">
            <span className="text-sm font-bold text-[var(--link-title)]">02</span>
            <h2 className="text-2xl font-bold text-[var(--text-main)]">Concepts</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--border-color)] border border-[var(--border-color)] rounded-lg overflow-hidden">
            {[
              { title: "Manual and Automatic mode", desc: "In Manual mode the dashboard switch decides the bulb state directly. In Automatic mode the ESP32 decides on its own, comparing live sensor readings against configurable thresholds." },
              { title: "Temperature + humidity hysteresis automation", desc: "Auto mode is driven by temperature and humidity together: the bulb turns ON if temperature crosses the high threshold or humidity crosses its own threshold, and turns OFF only once both have dropped back down. The LDR value is still read and logged but kept only as a reference for optional light-based logic." },
              { title: "Why a hysteresis gap", desc: "Turning ON when temperature or humidity crosses the high threshold (30°C / 70%), but only turning OFF once both drop back below the lower band (26°C / under 70%), stops the bulb from flickering when a reading hovers right at one edge." },
              { title: "Historical logging", desc: "Each sensor reading is pushed as a new timestamped record under logs instead of overwriting the last value, building up a history the dashboard can query and chart over time." },
              { title: "Log record", desc: "Each entry stores timestamp, temperature, humidity, light, bulb and mode — visible directly in the Realtime Database under logs." },
              { title: "CSV export", desc: "The dashboard converts stored log records into rows and downloads them as a .csv file that opens directly in any spreadsheet application." }
            ].map((item, i) => (
              <div key={i} className="bg-[var(--bg-main)] p-4 flex flex-col gap-2">
                <span className="font-semibold text-[var(--text-main)] text-[15px]">{item.title}</span>
                <span className="text-[var(--text-muted)] text-[14px] leading-relaxed">{item.desc}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 pt-8 border-t border-[var(--border-color)]">
          <div className="flex items-baseline gap-3 mb-6">
            <span className="text-sm font-bold text-[var(--link-title)]">03</span>
            <h2 className="text-2xl font-bold text-[var(--text-main)]">System Design</h2>
          </div>
          <div className="flex flex-wrap items-center gap-2 mb-6">
            {["DHT11 + LDR", "ESP32 (mode + hysteresis logic)", "Firebase (sensors / control / logs / status)", "Dashboard (live view, history, CSV)"].map((step, i, arr) => (
              <div key={i} className="flex items-center gap-2">
                <span className="border border-[var(--border-color)] rounded px-3 py-1.5 text-[var(--text-main)] text-[13px]">{step}</span>
                {i < arr.length - 1 && <span className="text-[var(--text-muted)]">→</span>}
              </div>
            ))}
          </div>
          <p className="text-[var(--text-muted)] leading-relaxed text-[15px] mb-6">
            Mode changes and manual bulb commands travel the reverse path: dashboard → Firebase <code className="bg-[var(--bg-hover)] text-[var(--text-main)] px-1.5 py-0.5 rounded font-mono text-sm">control</code> → ESP32. The ESP32 also pushes a new record to <code className="bg-[var(--bg-hover)] text-[var(--text-main)] px-1.5 py-0.5 rounded font-mono text-sm">logs</code> on every reading cycle, independently of whether anyone is viewing the dashboard at that moment.
          </p>
          <div className="bg-[var(--bg-panel)] border border-[var(--border-color)] rounded-lg p-6 overflow-x-auto">
            <div className="flex items-start gap-4 min-w-max">
              {[
                { label: "DHT11 + LDR", sub: "temp, humidity, light (raw)" },
                null,
                { label: "ESP32", sub: "mode switch +\ntemp/humidity\nhysteresis logic", highlight: true },
                null,
                { label: "Firebase RTDB", sub: "", grid: ["sensors", "control", "logs", "status"] },
                null,
                { label: "Dashboard", sub: "live view, history,\nchart, CSV export" }
              ].map((node, i) => {
                if (!node) return <span key={i} className="text-[var(--link-title)] text-lg mt-4">→</span>;
                if (node.grid) return (
                  <div key={i} className="flex flex-col items-center">
                    <div className="text-[13px] font-semibold text-[var(--text-main)] mb-2">{node.label}</div>
                    <div className="grid grid-cols-2 gap-1">
                      {node.grid.map((g: string) => <div key={g} className="px-3 py-1.5 rounded border border-[var(--border-color)] text-center text-[12px] text-[var(--text-muted)]">{g}</div>)}
                    </div>
                  </div>
                );
                return (
                  <div key={i} className={`flex flex-col items-center justify-center px-5 py-4 rounded border text-center min-w-[120px] ${node.highlight ? 'border-[var(--link-title)] text-[var(--link-title)]' : 'border-[var(--border-color)] text-[var(--text-main)]'}`}>
                    <span className="font-semibold text-[13px]">{node.label}</span>
                    {node.sub && <span className="text-[11px] text-[var(--text-muted)] mt-0.5 whitespace-pre-line">{node.sub}</span>}
                  </div>
                );
              })}
            </div>
            <p className="text-[11px] text-[var(--text-muted)] text-center mt-4 italic">Manual mode / bulb writes travel dashboard → control → ESP32</p>
          </div>
        </section>

        <section className="mt-8 pt-8 border-t border-[var(--border-color)]">
          <div className="flex items-baseline gap-3 mb-6">
            <span className="text-sm font-bold text-[var(--link-title)]">04</span>
            <h2 className="text-2xl font-bold text-[var(--text-main)]">Hardware &amp; Software</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-base font-semibold text-[var(--text-main)] mb-4">Hardware</h3>
              <ul className="space-y-3">
                {["ESP32 development board", "DHT11 sensor", "LDR with a fixed resistor (voltage divider)", "Bulb wired through a 2-channel relay module", "Breadboard and jumper wires"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[var(--text-muted)] text-[15px]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--link-title)] mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-base font-semibold text-[var(--text-main)] mb-4">Software &amp; Platforms</h3>
              <ul className="space-y-3">
                {[
                  "Firebase project (Authentication + Realtime Database + Hosting) — same env-monitor project as Task 4",
                  "Arduino IDE 2.3.10 with the Firebase Arduino Client Library for ESP8266 and ESP32 (Mobizt, v4.4.17) and the DHT sensor library",
                  "HTML/JS dashboard using the Firebase web SDK with a Live Environment Trends chart"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[var(--text-muted)] text-[15px]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--link-title)] mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-8 pt-8 border-t border-[var(--border-color)]">
          <div className="flex items-baseline gap-3 mb-6">
            <span className="text-sm font-bold text-[var(--link-title)]">05</span>
            <h2 className="text-2xl font-bold text-[var(--text-main)]">Wiring / Setup</h2>
          </div>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-[14px] border-collapse">
              <thead>
                <tr className="border-b border-[var(--border-color)]">
                  <th className="text-left py-3 pr-6 text-[var(--link-title)] text-xs uppercase tracking-wider font-semibold">ESP32 PIN</th>
                  <th className="text-left py-3 pr-6 text-[var(--link-title)] text-xs uppercase tracking-wider font-semibold">Connects To</th>
                  <th className="text-left py-3 text-[var(--link-title)] text-xs uppercase tracking-wider font-semibold">Purpose</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["GPIO 4", "DHT11 data pin", "Temperature + humidity (DHTPIN)"],
                  ["GPIO 34 (analog)", "LDR + fixed resistor divider", "Ambient light, raw value (LDR_PIN) — monitored only"],
                  ["GPIO 5", "Relay module IN", "Switches the bulb (BULB_PIN)"]
                ].map(([pin, conn, purpose], i) => (
                  <tr key={i} className="border-b border-[var(--border-color)]">
                    <td className="py-3 pr-6 font-mono text-[var(--text-main)] text-[13px]">{pin}</td>
                    <td className="py-3 pr-6 text-[var(--text-muted)]">{conn}</td>
                    <td className="py-3 text-[var(--text-muted)]">{purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-[14px] border-collapse">
              <thead>
                <tr className="border-b border-[var(--border-color)]">
                  <th className="text-left py-3 pr-6 text-[var(--link-title)] text-xs uppercase tracking-wider font-semibold">Constant</th>
                  <th className="text-left py-3 pr-6 text-[var(--link-title)] text-xs uppercase tracking-wider font-semibold">Value</th>
                  <th className="text-left py-3 text-[var(--link-title)] text-xs uppercase tracking-wider font-semibold">Effect in Auto Mode</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["TEMP_HIGH_THRESHOLD", "30.0°C", "Bulb turns ON if crossed (OR)"],
                  ["HUMIDITY_HIGH_THRESHOLD", "70%", "Bulb turns ON if crossed (OR)"],
                  ["TEMP_LOW_THRESHOLD", "26.0°C", "Bulb turns OFF, only once both conditions clear"],
                  ["LDR_DARK_THRESHOLD", "1500", "Defined but not wired to a decision — reference only"],
                  ["READ_INTERVAL_MS / LOG_INTERVAL_MS", "3s / 15s", "How often sensors are read / a log entry is pushed"]
                ].map(([constant, value, effect], i) => (
                  <tr key={i} className="border-b border-[var(--border-color)]">
                    <td className="py-3 pr-6 font-mono text-[var(--text-main)] text-[12px]">{constant}</td>
                    <td className="py-3 pr-6 text-[var(--text-muted)]">{value}</td>
                    <td className="py-3 text-[var(--text-muted)]">{effect}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[var(--text-muted)] text-[14px] mt-4 leading-relaxed">
            The bulb runs on mains voltage, so it stays isolated behind the relay module rather than being driven directly from the ESP32.
          </p>
        </section>

        <section className="mt-8 pt-8 border-t border-[var(--border-color)]">
          <div className="flex items-baseline gap-3 mb-4">
            <span className="text-sm font-bold text-[var(--link-title)]">06</span>
            <h2 className="text-2xl font-bold text-[var(--text-main)]">Full Source Code</h2>
          </div>
          <div className="bg-[#0d1117] border border-[var(--border-color)] rounded-lg p-4 overflow-x-auto">
            <pre className="text-[13px] font-mono leading-relaxed text-[#c9d1d9]">{`// task5_esp32_firebase.ino
/*
  ESP32 + Firebase Environment Monitor
  Reads: DHT11 (temperature, humidity), LDR (ambient light)
  Writes: /sensors/{temperature,humidity,light}, /logs/{push}
  Reads control: /control/mode ("auto"/"manual"), /control/bulb (bool)

  AUTOMATION (auto mode):
    Bulb ON  when temperature >= TEMP_HIGH_THRESHOLD OR humidity >= HUMIDITY_HIGH_THRESHOLD
    Bulb OFF when temperature <= TEMP_LOW_THRESHOLD  AND humidity <  HUMIDITY_HIGH_THRESHOLD
*/

#include <WiFi.h>
#include <Firebase_ESP_Client.h>
#include "addons/TokenHelper.h"
#include "addons/RTDBHelper.h"
#include <DHT.h>

#define WIFI_SSID       "YOUR_WIFI_NAME"
#define WIFI_PASSWORD   "YOUR_WIFI_PASSWORD"
#define API_KEY         "YOUR_FIREBASE_API_KEY"
#define DATABASE_URL    "YOUR_DATABASE_URL"
#define USER_EMAIL      "device@example.com"
#define USER_PASSWORD   "device_password"

#define DHTPIN          4
#define DHTTYPE         DHT11
#define LDR_PIN         34
#define BULB_PIN        5

#define TEMP_HIGH_THRESHOLD      30.0
#define TEMP_LOW_THRESHOLD       26.0
#define HUMIDITY_HIGH_THRESHOLD  70.0
#define READ_INTERVAL_MS         3000
#define LOG_INTERVAL_MS          15000

DHT dht(DHTPIN, DHTTYPE);
FirebaseData fbdo;
FirebaseAuth auth;
FirebaseConfig config;

unsigned long lastRead = 0;
unsigned long lastLog  = 0;
bool autoBulbState = false;

void setup() {
  Serial.begin(115200);
  pinMode(BULB_PIN, OUTPUT);
  digitalWrite(BULB_PIN, LOW);
  dht.begin();

  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  while (WiFi.status() != WL_CONNECTED) { Serial.print("."); delay(300); }
  Serial.println("Connected, IP: " + WiFi.localIP().toString());

  config.api_key        = API_KEY;
  config.database_url   = DATABASE_URL;
  auth.user.email       = USER_EMAIL;
  auth.user.password    = USER_PASSWORD;
  config.token_status_callback = tokenStatusCallback;

  Firebase.begin(&config, &auth);
  Firebase.reconnectWiFi(true);

  unsigned long start = millis();
  while (auth.token.uid == "" && millis() - start < 10000) { delay(200); }
  Serial.println("Firebase ready.");

  Firebase.RTDB.setBool(&fbdo, "status/online", true);
  if (!Firebase.RTDB.getString(&fbdo, "control/mode"))
    Firebase.RTDB.setString(&fbdo, "control/mode", "auto");
}

void applyBulb(bool on) {
  digitalWrite(BULB_PIN, on ? HIGH : LOW);
  Firebase.RTDB.setBool(&fbdo, "control/bulb", on);
}

void loop() {
  if (millis() - lastRead >= READ_INTERVAL_MS) {
    lastRead = millis();

    float temperature = dht.readTemperature();
    float humidity    = dht.readHumidity();
    int   lightRaw    = analogRead(LDR_PIN);

    if (isnan(temperature) || isnan(humidity)) {
      Serial.println("DHT11 read failed, skipping."); return;
    }

    Firebase.RTDB.setFloat(&fbdo, "sensors/temperature", temperature);
    Firebase.RTDB.setFloat(&fbdo, "sensors/humidity",    humidity);
    Firebase.RTDB.setInt  (&fbdo, "sensors/light",       lightRaw);

    String mode = "auto";
    if (Firebase.RTDB.getString(&fbdo, "control/mode")) mode = fbdo.stringData();

    bool bulbState = false;
    if (mode == "manual") {
      if (Firebase.RTDB.getBool(&fbdo, "control/bulb")) bulbState = fbdo.boolData();
      digitalWrite(BULB_PIN, bulbState ? HIGH : LOW);
    } else {
      if      (temperature >= TEMP_HIGH_THRESHOLD || humidity >= HUMIDITY_HIGH_THRESHOLD) autoBulbState = true;
      else if (temperature <= TEMP_LOW_THRESHOLD  && humidity <  HUMIDITY_HIGH_THRESHOLD) autoBulbState = false;
      bulbState = autoBulbState;
      applyBulb(bulbState);
    }

    if (millis() - lastLog >= LOG_INTERVAL_MS) {
      lastLog = millis();
      FirebaseJson json;
      json.set("temperature",   temperature);
      json.set("humidity",      humidity);
      json.set("light",         lightRaw);
      json.set("bulb",          bulbState);
      json.set("mode",          mode);
      json.set("timestamp/.sv", "timestamp");
      Firebase.RTDB.pushJSON(&fbdo, "logs", &json);
    }
  }
}`}</pre>
          </div>
        </section>

        <section className="mt-8 pt-8 border-t border-[var(--border-color)]">
          <div className="flex items-baseline gap-3 mb-4">
            <span className="text-sm font-bold text-[var(--link-title)]">07</span>
            <h2 className="text-2xl font-bold text-[var(--text-main)]">Implementation Breakdown</h2>
          </div>
          <p className="text-[var(--text-muted)] text-[15px] mb-6">Key sections, in my own words:</p>
          <ul className="space-y-6">
            <li className="flex flex-col gap-1 text-[15px]">
              <span className="font-semibold text-[var(--text-main)] flex items-center gap-2">
                <span className="text-[var(--link-title)] text-[10px]">&bull;</span> Wi-Fi and Firebase config
              </span>
              <span className="text-[var(--text-muted)] leading-relaxed ml-4">
                Connects to Wi-Fi, then configures the Firebase client with <code className="bg-[var(--bg-hover)] text-[var(--text-main)] px-1.5 py-0.5 rounded font-mono text-sm">API_KEY</code>, <code className="bg-[var(--bg-hover)] text-[var(--text-main)] px-1.5 py-0.5 rounded font-mono text-sm">DATABASE_URL</code>, and a dedicated device account (a separate Auth user from the human login on the dashboard), before calling <code className="bg-[var(--bg-hover)] text-[var(--text-main)] px-1.5 py-0.5 rounded font-mono text-sm">Firebase.begin()</code> and waiting for a token.
              </span>
            </li>
            <li className="flex flex-col gap-1 text-[15px]">
              <span className="font-semibold text-[var(--text-main)] flex items-center gap-2">
                <span className="text-[var(--link-title)] text-[10px]">&bull;</span> Reading DHT11 and LDR
              </span>
              <span className="text-[var(--text-muted)] leading-relaxed ml-4">
                Every <code className="bg-[var(--bg-hover)] text-[var(--text-main)] px-1.5 py-0.5 rounded font-mono text-sm">READ_INTERVAL_MS</code> (3 s), reads temperature and humidity from the DHT11 and a raw analog value from the LDR pin, skipping the entire cycle if the DHT11 returns NaN.
              </span>
            </li>
            <li className="flex flex-col gap-1 text-[15px]">
              <span className="font-semibold text-[var(--text-main)] flex items-center gap-2">
                <span className="text-[var(--link-title)] text-[10px]">&bull;</span> Mode switch and combined hysteresis logic
              </span>
              <span className="text-[var(--text-muted)] leading-relaxed ml-4">
                In <code className="bg-[var(--bg-hover)] text-[var(--text-main)] px-1.5 py-0.5 rounded font-mono text-sm">&quot;manual&quot;</code> mode the bulb simply follows whatever <code className="bg-[var(--bg-hover)] text-[var(--text-main)] px-1.5 py-0.5 rounded font-mono text-sm">control/bulb</code> the dashboard last wrote. In <code className="bg-[var(--bg-hover)] text-[var(--text-main)] px-1.5 py-0.5 rounded font-mono text-sm">&quot;auto&quot;</code> mode the bulb turns ON if temperature crosses <code className="bg-[var(--bg-hover)] text-[var(--text-main)] px-1.5 py-0.5 rounded font-mono text-sm">TEMP_HIGH_THRESHOLD</code> or humidity crosses <code className="bg-[var(--bg-hover)] text-[var(--text-main)] px-1.5 py-0.5 rounded font-mono text-sm">HUMIDITY_HIGH_THRESHOLD</code>, and only turns OFF once temperature drops to <code className="bg-[var(--bg-hover)] text-[var(--text-main)] px-1.5 py-0.5 rounded font-mono text-sm">TEMP_LOW_THRESHOLD</code> and humidity is back under the threshold — with the state held in <code className="bg-[var(--bg-hover)] text-[var(--text-main)] px-1.5 py-0.5 rounded font-mono text-sm">autoBulbState</code> so it stays steady in the dead-band instead of flickering.
              </span>
            </li>
            <li className="flex flex-col gap-1 text-[15px]">
              <span className="font-semibold text-[var(--text-main)] flex items-center gap-2">
                <span className="text-[var(--link-title)] text-[10px]">&bull;</span> Pushing timestamped log records
              </span>
              <span className="text-[var(--text-muted)] leading-relaxed ml-4">
                Separately, every <code className="bg-[var(--bg-hover)] text-[var(--text-main)] px-1.5 py-0.5 rounded font-mono text-sm">LOG_INTERVAL_MS</code> (15 s), pushes a new child under <code className="bg-[var(--bg-hover)] text-[var(--text-main)] px-1.5 py-0.5 rounded font-mono text-sm">logs</code> containing temperature, humidity, light, bulb, mode and a Firebase server-side timestamp — which is what the Historical Data table and CSV export both read from.
              </span>
            </li>
            <li className="flex flex-col gap-1 text-[15px]">
              <span className="font-semibold text-[var(--text-main)] flex items-center gap-2">
                <span className="text-[var(--link-title)] text-[10px]">&bull;</span> Dashboard history table and chart
              </span>
              <span className="text-[var(--text-muted)] leading-relaxed ml-4">
                <code className="bg-[var(--bg-hover)] text-[var(--text-main)] px-1.5 py-0.5 rounded font-mono text-sm">dashboard.html</code> queries <code className="bg-[var(--bg-hover)] text-[var(--text-main)] px-1.5 py-0.5 rounded font-mono text-sm">logs</code> ordered by timestamp to populate the table and the Live Environment Trends chart.
              </span>
            </li>
            <li className="flex flex-col gap-1 text-[15px]">
              <span className="font-semibold text-[var(--text-main)] flex items-center gap-2">
                <span className="text-[var(--link-title)] text-[10px]">&bull;</span> CSV generation and download
              </span>
              <span className="text-[var(--text-muted)] leading-relaxed ml-4">
                The Download CSV button serializes whatever log rows are currently loaded in the table into a <code className="bg-[var(--bg-hover)] text-[var(--text-main)] px-1.5 py-0.5 rounded font-mono text-sm">.csv</code> file entirely client-side.
              </span>
            </li>
          </ul>
        </section>

        <section className="mt-8 pt-8 border-t border-[var(--border-color)]">
          <div className="flex items-baseline gap-3 mb-6">
            <span className="text-sm font-bold text-[var(--link-title)]">08</span>
            <h2 className="text-2xl font-bold text-[var(--text-main)]">Configuration</h2>
          </div>
          <ol className="space-y-5 list-none">
            {[
              <>Created a dedicated device account (<code className="bg-[var(--bg-hover)] text-[var(--text-main)] px-1.5 py-0.5 rounded font-mono text-sm">device@example.com</code>) in Firebase Auth for the ESP32 to sign in with, kept entirely separate from the human login used on the dashboard.</>,
              <>Reused the <code className="bg-[var(--bg-hover)] text-[var(--text-main)] px-1.5 py-0.5 rounded font-mono text-sm">logs</code> node already scoped in Task 4&apos;s database rules (<code className="bg-[var(--bg-hover)] text-[var(--text-main)] px-1.5 py-0.5 rounded font-mono text-sm">.read/.write gated on auth != null</code>, <code className="bg-[var(--bg-hover)] text-[var(--text-main)] px-1.5 py-0.5 rounded font-mono text-sm">.indexOn: [&quot;timestamp&quot;]</code>) rather than creating a new structure.</>,
              <>Confirmed each record written under <code className="bg-[var(--bg-hover)] text-[var(--text-main)] px-1.5 py-0.5 rounded font-mono text-sm">logs</code> contains bulb, humidity, light, mode, temperature and timestamp by inspecting the live data directly in the Firebase console.</>,
              <>Calibrated the automatic-mode thresholds as ON/OFF pairs for both signals — 30.0°C / 70% humidity to turn ON, 26.0°C and under 70% humidity to turn OFF — rather than a single cutoff, so the bulb doesn&apos;t flicker when a reading sits in between.</>,
              <>Verified that the Historical Data table and the downloaded CSV both reflect the same rows as the Firebase console, across both Manual and Auto mode entries.</>
            ].map((item, i) => (
              <li key={i} className="flex gap-4 text-[15px]">
                <span className="text-[var(--link-title)] font-bold shrink-0 mt-0.5">{i + 1}.</span>
                <span className="text-[var(--text-muted)] leading-relaxed">{item}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-8 pt-8 border-t border-[var(--border-color)]">
          <div className="flex items-baseline gap-3 mb-6">
            <span className="text-sm font-bold text-[var(--link-title)]">09</span>
            <h2 className="text-2xl font-bold text-[var(--text-main)]">Project Gallery</h2>
          </div>
          <div className="flex flex-col gap-6">
            {[
              "Screenshot 2026-10-08 203845.png",
              "Screenshot 2026-10-08 203907.png",
              "Screenshot 2026-10-08 203939.png",
              "Screenshot 2026-10-08 203959.png",
              "Screenshot 2026-10-08 235610.png"
            ].map((filename, i) => (
              <div key={i} className="relative w-full rounded-lg overflow-hidden border border-[var(--border-color)] bg-[var(--bg-main)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/task 4/${filename}`}
                  alt={`Task 5 Dashboard Screenshot ${i + 1}`}
                  className="w-full h-auto object-contain"
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 w-full max-w-[652px] pt-4">
      <div className="flex items-center text-sm text-[var(--text-muted)] gap-2 mb-2">
        <Link href="/protosem" className="hover:underline">Protosem</Link>
        <span>&rsaquo;</span>
        <Link href="/protosem" className="hover:underline">IoT</Link>
        <span>&rsaquo;</span>
        <span className="text-[var(--text-main)]">Task {taskId}</span>
      </div>
      <IotTaskNavigation currentTask={Number(taskId)} />
      <h1 className="text-2xl font-normal text-[var(--text-main)] mb-6">IoT Task {taskId}</h1>
      <div className="bg-[var(--bg-main)] p-6 rounded-lg border border-[var(--border-color)]">
        <h2 className="text-[18px] font-medium text-[var(--text-main)] mb-4">Task Details &amp; Learnings</h2>
        <p className="text-[var(--text-muted)]">Content coming soon.</p>
      </div>
    </div>
  );
}
