#include <ESP8266WiFi.h>
#include <FirebaseArduino.h>

// Set these to run example.
#define FIREBASE_HOST "XX"
#define FIREBASE_AUTH "XX"
#define WIFI_SSID "XX"
#define WIFI_PASSWORD "XX"

#define RED_LED 4
#define GREEN_LED 5

bool redLedOn = false;
bool greenLedOn = false;

void setup() {
  Serial.begin(115200);
  
  pinMode(RED_LED, OUTPUT );
  pinMode(GREEN_LED, OUTPUT );
  
  digitalWrite(RED_LED, false);
  digitalWrite(GREEN_LED, false);
  
  // connect to wifi.
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.println("connecting");
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(500);
  }
  Serial.println("connected: ");
  Serial.println(WiFi.localIP());
  
  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH); 
}

void loop() {
  redLedOn = Firebase.getBool("/led/red/on");
  digitalWrite(RED_LED, redLedOn);
  Serial.println('Red Led: ', redLedOn);
  Serial.println(redLedOn);

  greenLedOn = Firebase.getBool("/led/green/on");
  digitalWrite(GREEN_LED, greenLedOn);
  Serial.println('Green Led: ');
  Serial.println(greenLedOn);
  
  delay(1000);
 }
