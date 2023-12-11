from fastapi import FastAPI
import uvicorn

app = FastAPI()


@app.get(path="/", description="Test")
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: str = None):
    return {"item_id": item_id, "q": q}


# TODO: image upload function
@app.get(path="/upload/")
def upload_images():
    return "image upload finished"


# TODO: image output path config
@app.get(path="/output/")
def output_images():
    return "image output finished"


# TODO: AI model select
@app.get(path="/models/")
def select_model():
    return "select model"


if __name__ == '__main__':
    uvicorn.run(app)
