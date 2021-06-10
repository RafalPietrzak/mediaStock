import taskRunner from "./taskRunner";
import getSources from "./getSources.cronTask";
import getTrack from "./getTrack.cronTask";
taskRunner(getSources, getTrack);
