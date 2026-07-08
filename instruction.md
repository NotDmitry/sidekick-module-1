## Completed with Git Bash terminal

### Steps:

- create empty local folder and open `Git Bash` in it;
- `git init`: initialize local repo (`.git` folder);
- `git status`: check current status;
- create `something.txt` file with `"Bad day!"` as a content (using `touch` and `echo`);
- check status again, then `git add .` to add file to the staging area;
- `git commit -m "init: start project with the welcoming letter"`: create a commit;
- `git checkout -b feature-branch-1`: create and switch into the new branch (to do it separately: first call `git branch`, then `git checkout`);
- `echo "The weather is bad as well" >> something.txt` + `git add -A` + `git commit -m "feat: add weather forecast to something.txt"`;
- `git remote add origin git@github.com:NotDmitry/test-repo.git`: add remote repo created with GitHub;
- `git push origin feature-branch-1 -u`: push feature branch to the remote repo (and set it for tracking);
- `git log --oneline --all`: show full commit history (every branch);
- `git branch bugfix-1` + `git checkout bugfix-1`: new branch from current (`feature`), this is a bit ambiguous as it is not said that it must be derived directly from `main` (further in the task it is specified explicitly with `hotfix-1` being created exactly from `main` | `master`);
- make changes to the file (replace `"Bad"` with `"Good"`) then `git add -A`;
- `git commit -m "fix: change greeting message that prevents users from accessing good mood"`;
- `git checkout master` + `git merge bugfix-1`: fast-forward merge;
- `git checkout -b hotfix-1`: create a new branch from `master`;
- added a string `"This change is uncommited."` to the text file;
- `git stash`: to put uncommited changes into temporary storage;
- next step is quite confusing as according to the task only `feature-branch-1` is currently on remote, so I can't pull from hotfix-1 (as it ends with `unexistent ref` error) and the only option is `git pull origin feature-branch-1` which will have no effect as such tracking branch is already up-to-date;
- `git rebase master`: rebase `hotfix-1` on `master` (though the problem still remains: they are on the same commit currently and there is nothing to rebase);
- `git stash pop`: now stashed changes return and `something.txt` has a status `modified` with unstaged changes being present in it.




