/*

*/
// this is using a variable with a data type
const temperature = 30.5

// this is a analog I/O function
int sensorPin = A1;  // A0 is an analog input pin
int sensorValue = 0;  // Variable to store the sensor reading
void setup() {
  Serial.begin(9600);  // Start serial monitor to display values
}
void loop() {
  sensorValue = analogRead(sensorPin); // Read sensor data
  Serial.println(sensorValue);  // Print the value to the serial monitor
  delay(500);  // Wait half a second before reading again
}

int ledPin = 5;  // Pin for LED
int brightness = 250;  // Set brightness (0 = off, 255 = full brightness)
void setup() {
  pinMode(ledPin, OUTPUT);  // Set LED pin as output
}
void loop() {
  analogWrite(ledPin, brightness); // Set LED brightness
  delay(1000);  // Wait 1 second
}
// this is a digital I/O function
int buttonPin = 3;   // Button connected to pin 2
int ledPin = 6;      // LED connected to pin 9
int buttonState = 0; // Stores button state
int lastButtonState = 0; // Stores last button state
int ledState = LOW;  // Stores LED state (ON/OFF)

void setup() {
  pinMode(buttonPin, INPUT);  // Set button as input
  pinMode(ledPin, OUTPUT);    // Set LED as output
}

void loop() {
  buttonState = digitalRead(buttonPin); // Read button state

  // Check if button was just pressed (not held)
  if (buttonState == HIGH && lastButtonState == LOW) {
    ledState = !ledState;  // Toggle LED state
    digitalWrite(ledPin, ledState); // Apply new LED state
    delay(200);  // Small delay to avoid multiple detections (debounce)
  }

  lastButtonState = buttonState; // Update last button state
}


