# Sample app

- Backend: FastAPI (running on localhost:8000)
- Frontend: React (running on localhost:3000)
    - Styling: Material-UI

1. In the project folder, in this case the `FastAPI-React` folder, create a folder `backend`, then create the following directory tree

```
FastAPI-React
└── backend
    ├── app
    │   └── api.py
    └── main.py
```
    - running `python main.py` will start the backend.
2. Return to the project directory `FastAPI-React`, and create the frontend directory by running:
```
$ npx create-react-app frontend
```

Then we will have the following directory tree

```
FastAPI-React
├── backend
│   ├── app
│   │   └── api.py
│   └── main.py
└── frontend
```

3. Then develop the backend and frontend separately and connect them.
4. Add `requirements.txt` and `.gitignore` files if need be.

```
FastAPI-React
├── backend
│   ├── app
│   │   └── api.py
│   ├── .gitignore
│   ├── main.py
│   └── reuqirements.txt
└── frontend
    └── .gitignore
```