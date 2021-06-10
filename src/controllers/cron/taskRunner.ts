const cron = require("node-cron");
import fnIf from "../../utils/fnIf";
type Task = {
  time: String;
  fn: Function;
};
const taskRunner = (...tasksArray: Task[]): void => {
  fnIf(() => {
    tasksArray.map((task: Task): void => {
      cron.schedule(task.time, task.fn);
    });
  })(tasksArray.length > 0);
};

export default taskRunner;
