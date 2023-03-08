const loadFile = async () => {
  let fileLoaded = true;

  if (fileLoaded) {
    console.log("File loaded successfuly");
  } else {
    throw "File not loaded";
  }
};

const startProcess = async () => {
  try {
    let message = await loadFile();
    console.log(message);
  } catch (error) {
    console.log(error);
  }
};

startProcess();
