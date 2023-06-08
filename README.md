# simple-webapp
Client와 Server 정보를 출력해주는 간단한 웹앱 입니다.

### Python setup
가상환경 세팅 후 필요한 패키지 설치
1. Setup .venv
    ```
    python -m venv .venv
    source .venv/bin/activate
    ```
2. Install Packages
    ```
    python -m pip install -r requirements.txt
    ```
3. Run app.py
    - For Local Test
    ```
    python app.py
    ```
### Tips
1. install python Package
    ```
    python -m pip install <PACKAGE-NAME>
    ```
2. Freeze Packages
    ```
    python -m pip freeze > requirements.txt
    ```
3. pyenv version selection info
    - [pyenv tips](https://realpython.com/intro-to-pyenv/#specifying-your-python-version)
4. python venv and package
    - [venv and package](https://docs.python.org/ko/3.8/tutorial/venv.html)

### pyenv로 가상환경 세팅
- [사전] pyenv dependency 설치
```
sudo apt-get update; sudo apt-get install make build-essential libssl-dev zlib1g-dev \\nlibbz2-dev libreadline-dev libsqlite3-dev wget curl llvm \\nlibncursesw5-dev xz-utils tk-dev libxml2-dev libxmlsec1-dev libffi-dev liblzma-dev
```
- pyenv 환경변수 설정
```
export PATH="/home/USERNAME/.pyenv/bin:$PATH"
eval "$(pyenv init -)"
eval "$(pyenv virtualenv-init -)"
```
1. 프로젝트용으로 사용할 python 버전 설치
```
pyenv install 3.8.9
```
2. 가상환경 셋업
```
# pyenv virtualenv <version> <가상환경이름>
pyenv virtualenv 3.8.9 myvirtualenv
```
3. 가상환경 설치 확인 (가상환경이름만 나오는것은 심볼릭 링크)
```
pyenv versions
```
4. 가상환경 적용
```
pyenv local myvirtualenv
```