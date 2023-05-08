# Windows
**Passo 1:** Entre no link para fazer o download do [Esp-IDF](https://dl.espressif.com/dl/esp-idf/?idf=4.4)  
            - Selecione a primeira opção "Universal Online Instaler"
            
**Passo 2:** Complete a instalação, e na última tela marque todas as opções.  

**Passo 3:** Pronto! Esse arquivo já instala todas as ferramentas necessárias para o setup do ambiente no windows.  

**OBS:** É necessário possuir o driver [CP210x](https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers?tab=downloads)   
     - selecione a opção de acordo com seu sistema operacional.

# Mac
**Passo 1:** Instale o HomeBrew  
  Digite o seguinte código no terminal: 
  ```bash
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
  ```
  
  
**Passo 2:** Instale CMake e Ninja  

  HomeBrew:   
  ```bash
  brew install cmake ninja dfu-util
  ```
  
  
**Passo 3:**  
O Esp-idf vai utilizará versão do python que já está instalada no default do macOS.    
Usar python 2.7 não é recomendado, então verifique sua verão com o código abaixo:   

```bash
python –version 
```

Se o resultado der "Python 2.7.17", verifique se a sua máquina possui python 3:   
```bash
python3 –version 
```

Se houver alguma mensagem de erro, significa que o python 3 não está instalado. Então instale o python 3 com os seguintes comandos:   

HomeBrew:   
```bash
brew install python3
```


**Passo 4:** Para construir as aplicações usando ESP32, você precisa clonar o repositório da Espressif que possui todas as ferramentas necessárias para fazer a aplicação:  

  Abra o terminal e digite os seguintes comandos:  
   ```bash
   mkdir -p ~/esp
   ```
   
   ```bash
   cd ~/esp
   ```
   
   ```bash
   git clone --recursive https://github.com/espressif/esp-idf.git
   ```
   
   
**Passo 5:** Set Up das ferramentas.   
Abra o terminal e digite os seguintes comandos: 
  ```bash
  cd ~/esp/esp-idf
  ```
  ```bash
  ./install.sh esp32
  ```
  

**Passo 6:** Set up das variáveis de ambiente. 
 Abra o terminal que você irá usar o ESP-IDF (PRESTE ATENÇÃO NO PONTO ANTES DE $HOME):
 
      . $HOME/esp/esp-idf/export.sh
    


# Linux
OBS: É preciso possuir Git  
**Passo 1:** Para compilar usando ESP-IDF, você precisa de alguns pacotes. Rode os comandos abaixo dependendo da sua distribuição do linux.

  *Ubunto e Debian:* 
  ```bash
  sudo apt-get install git wget flex bison gperf python3 python3-venv cmake ninja-build ccache libffi-dev libssl-dev dfu-util libusb-1.0-0
  ```
  
  *CentOS 7 & 8 (CentOS 7 ainda recebe suporte, mas a versão 8 é mais recomendada):*
  ```bash
  sudo yum -y update && sudo yum install git wget flex bison gperf python3 cmake ninja-build ccache dfu-util libusbx
  ```
  
  *Arch:* 
  ```bash
  sudo pacman -S --needed gcc git make flex bison gperf python cmake ninja ccache dfu-util libusb
  ```
  
**Passo 2:** Para construir as aplicações usando ESP32, você precisa clonar o repositório da Espressif que possui todas as ferramentas necessárias para fazer a aplicação:

  Abra o terminal e digite os seguintes comandos: 
   ```bash
   mkdir -p ~/esp
   ```
   ```bash
   cd ~/esp
   ```
   ```bash
   git clone --recursive https://github.com/espressif/esp-idf.git
   ```
   
 **Passo 3:** Set-Up das ferramentas
 
  Abra o terminal e digite os seguintes comandos: 
  
  ```bash
  cd ~/esp/esp-idf
  ```
  ```bash
  ./install.sh esp32
  ```
  
  
**Passo 4:** Fazer o set-up das variáveis de ambiente
  
Abra o terminal que você irá usar o ESP-IDF (PRESTE ATENÇÃO NO PONTO ANTES DE $HOME):
    
    . $HOME/esp/esp-idf/export.sh
    
   
   
   
   
