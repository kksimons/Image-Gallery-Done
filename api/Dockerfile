FROM python:3.11

WORKDIR /app

EXPOSE 5050

COPY Pipfile ./
COPY Pipfile.lock ./
# for some reason doesn't work without the dotenv install despite it being installed locally.
RUN pip install pipenv
RUN pipenv requirements > requirements.txt
RUN pip install -r requirements.txt
RUN pip install -U python-dotenv

COPY . ./

CMD [ "python", "main.py" ]