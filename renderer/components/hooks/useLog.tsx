import { logAtom } from "../../atoms/logAtom";
import log from "electron-log/renderer";
import { useSetAtom } from "jotai";

const useLog = () => {
  const setLogData = useSetAtom(logAtom);

  const logit = (...args: any[]) => {
    //timezone 을 utc로 할거라면 아래 코드를 사용.
    // const timestamp = new Date().toISOString();
    const timestamp = new Date().toLocaleString("ko-KR", { timeZone: "Asia/Seoul" });
    log.log(timestamp, ...args);

    const data = `${timestamp} ${args.map(arg => typeof arg === 'object' ? JSON.stringify(arg) : arg).join(" ")}`;
    setLogData((prevLogData) => [...prevLogData, data]);
  };

  return {
    logit,
  };
};

export default useLog;
