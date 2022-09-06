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