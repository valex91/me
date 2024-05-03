export const enum CommandsEnum {
  HELP = "help",
  CD = "cd",
  LS = "ls",
  CAT = "cat",
  CLEAR = "clear",
  WHOAMI = "whoami",
}

export const enum FlagsEnum {
  ALL = "-A",
}

const commandsValidFlags: Partial<Record<CommandsEnum, Array<FlagsEnum>>> = {
  [CommandsEnum.LS]: [FlagsEnum.ALL],
};

export const flagForCommandValidator = (
  command: CommandsEnum,
  flag: string
) => {
  return (
    !!commandsValidFlags[command] &&
    commandsValidFlags[command]!.includes(flag as FlagsEnum)
  );
};

export const uova_di_pasqua = [
  {
    cmd: CommandsEnum.WHOAMI,
  },
];
export const commands = [
  {
    cmd: CommandsEnum.HELP,
    description: "Show this page",
  },
  {
    cmd: CommandsEnum.CD,
    args: "[directory]",
    description:
      "Change Directory - change the current working directory to a specific Folder, if no argument is passed will go back to last folder.",
  },
  {
    cmd: CommandsEnum.LS,
    description: "List information about available directories",
    flags: `${FlagsEnum.ALL}`,
  },
  {
    cmd: CommandsEnum.CAT,
    args: "[filename]",
    description: "Print (display) the content of files",
  },
  {
    cmd: CommandsEnum.CLEAR,
    description: "Clear the screen",
  },
];

export default function Commands() {
  return (
    <table className="w-full">
      <thead>
        <tr>
          <td>command</td>
          <td>args</td>
          <td>flags</td>
          <td>description</td>
        </tr>
      </thead>
      <tbody>
        {commands.map((command) => (
          <tr key={command.cmd}>
            <td>{command.cmd}</td>
            <td>{command.args}</td>
            <td>{command.flags}</td>
            <td>{command.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
