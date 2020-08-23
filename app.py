from flask import Flask, render_template

app = Flask(__name__)

labels = []

values = []

@app.route("/")
def chart():
    # labels = years()
    # values = datasets(data)
    return render_template('index.html', labels=labels, values=values)


if __name__ == '__main__':
    app.run()
