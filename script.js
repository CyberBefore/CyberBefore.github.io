body, html {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    background-color: navy; /* Updated background color */
}

#container {
    position: relative;
    width: 100%;
    height: 100%;
}

.dot {
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: lightblue;
}

.line {
    position: absolute;
    width: 2px;
    background-color: lightblue;
    transform-origin: top left;
}
