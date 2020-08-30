function solution(commands) {
  return commands
    .reduce(function (acc, currCommand) {
      const [op, ...others] = currCommand.split(" ");
      if (op === "add") {
        return acc.concat(others.join(" "));
      } else if (op === "remove") {
        return acc.filter((i) => i !== others.join(" "));
      }
      console.log(acc);
      return acc;
    }, [])
    .join(",");
}
