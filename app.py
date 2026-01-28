from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

CODIGO_SECRETO = '1912'
DATA_NAMORO = "2025-12-19T00:00:00"

@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        return redirect(url_for("love"))

    return render_template("index.html")

@app.route("/love")
def love():
    return render_template("love.html", data_inicio=DATA_NAMORO)
if __name__ == "__main__":
    app.run()