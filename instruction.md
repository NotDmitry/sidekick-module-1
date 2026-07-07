## Utilized environment: WSL 2 (Ubuntu)

### Steps:

- `mkdir CLI_Practice`: create a new directory;
- `cd CLI_Practice/`: navigate to the newly created folder;
- `nano commands.txt` + `[^O]` + `[^X]`: open new file in `Nano` text editor, save it and exit (alternative is `echo "content" > commands.txt` if `Nano` is considered cheating);
- `ls`: show current directories and files (currently only `commands.txt` is present);
- `mv commands.txt notes.txt`: rename (move) `commands.txt` to the `notes.txt`;
- `mkdir subdirectory`: created nested folder;
- `mv notes.txt subdirectory/`: same purpose as previous `mv` command encounter (not just rename but move);
- `rm -r subdirectory/`: delete subdirectory along with its contents (`-r` stands for recursive);
- `cd ..` + `date >> log.txt`: move back to the home (personal, `~/` | `/home/{user}`) directory, then append `log.txt` file (which will be created) with the result of `date` command;
- `cat log.txt` or `nano log.txt`: output the contents of `log.txt` to the terminal or open file in `Nano`.