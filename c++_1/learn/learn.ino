#include <ArduinoIoTCloud.h>
#include <Arduino_ConnectionHandler.h>
#include <Servo.h>

// Cloud dashboard variables (linked to switches)
bool servo1Switch;
bool servo2Switch;

const char SSID[]     = "YOUR_WIFI_NAME";
const char PASS[]     = "YOUR_WIFI_PASSWORD";

// Create servo objects
Servo servo1;  // Connected to pin 3
Servo servo2;  // Connected to pin 9

void initProperties() {
  ArduinoCloud.setBoardId(DEVICE_LOGIN_NAME);
  ArduinoCloud.setSecretDeviceKey(SECRET_DEVICE_KEY);

  ArduinoCloud.addProperty(servo1Switch, READWRITE, ON_CHANGE, onServo1SwitchChange);
  ArduinoCloud.addProperty(servo2Switch, READWRITE, ON_CHANGE, onServo2SwitchChange);
}

WiFiConnectionHandler ArduinoIoTPreferredConnection(SSID, PASS);

// Called once at startup
void setup() {
  // Serial
  Serial.begin(9600);
  delay(1500); 

  // Attach servos
  servo1.attach(3);
  servo2.attach(9);

  // Init IoT Cloud
  initProperties();
  ArduinoCloud.begin(ArduinoIoTPreferredConnection);
}

// Called constantly
void loop() {
  ArduinoCloud.update();
}

// When switch 1 is toggled
void onServo1SwitchChange() {
  if (servo1Switch) {
    for (int angle = 0; angle <= 180; angle += 10) {
      servo1.write(angle);
      delay(100);
    }
  } else {
    servo1.write(0);  // Reset position
  }
}

// When switch 2 is toggled
void onServo2SwitchChange() {
  if (servo2Switch) {
    for (int angle = 0; angle <= 180; angle += 10) {
      servo2.write(angle);
      delay(100);
    }
  } else {
    servo2.write(0);  // Reset position
  }
}