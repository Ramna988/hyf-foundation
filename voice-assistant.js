let userName = "";
let todos = [];

function getReply(command) {
  const safeCommand = String(command || "");
  const lowerCommand = safeCommand.toLowerCase();

  if (lowerCommand.startsWith("hello my name is ")) {
    userName = safeCommand.substring(17).trim();
    return `Nice to meet you ${userName}`;
  }

  if (lowerCommand === "what is my name?") {
    if (userName === "") {
      return "I don't know your name yet.";
    }
    return `Your name is ${userName}`;
  }

  if (lowerCommand.startsWith("add ") && lowerCommand.endsWith(" to my todo")) {
    const item = safeCommand.substring(4, safeCommand.length - 11).trim();
    todos.push(item);
    return `${item} added to your todo`;
  }

  if (
    lowerCommand.startsWith("remove ") &&
    lowerCommand.endsWith(" from my todo")
  ) {
    const item = safeCommand.substring(7, safeCommand.length - 13).trim();
    const index = todos.indexOf(item);
    if (index !== -1) {
      todos.splice(index, 1);
      return `Removed ${item} from your todo`;
    }
    return `${item} was not found in your todo`;
  }

  if (lowerCommand === "what is on my todo?") {
    if (todos.length === 0) {
      return "You have no todos.";
    } else if (todos.length === 1) {
      return `You have 1 todo - ${todos[0]}`;
    } else {
      return `You have ${todos.length} todos - ${todos.join(" and ")}`;
    }
  }

  if (lowerCommand === "what day is it today?") {
    const today = new Date();
    const day = today.getDate();
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const month = months[today.getMonth()];
    const year = today.getFullYear();
    return `${day}. of ${month} ${year}`;
  }

  if (lowerCommand.startsWith("what is ")) {
    const mathExpression = safeCommand.substring(8).replace("?", "").trim();
    const result = eval(mathExpression);
    return result.toString();
  }

  if (lowerCommand.startsWith("set a timer for ")) {
    const minutes = parseInt(safeCommand.replace("set a timer for ", ""));
    const milliseconds = minutes * 60 * 1000;

    setTimeout(() => {
      console.log("Timer done");
    }, milliseconds);

    return `Timer set for ${minutes} minutes`;
  }

  return "I am not sure how to respond to that.";
}

console.log(getReply("Hello my name is Ramna"));
console.log(getReply("What is my name?"));
console.log(getReply("Add fishing to my todo"));
console.log(getReply("Add gym workout to my todo"));
console.log(getReply("Add grocery shopping to my todo"));
console.log(getReply("How many todos are left?"));
console.log(getReply("Complete gym workout"));
console.log(getReply("What is on my todo?"));
console.log(getReply("what is 5 * 5"));
console.log(getReply("Clear my todo"));
console.log(getReply("What is on my todo?"));
