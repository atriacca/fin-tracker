- Git
    // Clone    -   fork = copying commands
    // PR (pull request) => Submit code to be added to a repository
    // git pull          => Retrieving most up to date code from a remote repository(branch)
    // add everyone from your group as a colaborator so code can be accessed.

    // 1. git clone <url to repository> // this creates a directory for you
    // 2. npm install (server-side & client-side) // has all the dependencies that for express mongoose
    // 3. Create new branch, checkout to it
        // 2 steps
            // git branch <branch-name>
            // git checkout <branch-name>
        //shorthand single step
            // git checkout -b <branch-name>
    // 4. git add -A, git commit -m "message", git push.
        1st time,       git push --set-upstream origin <branch-name>
        // shorthand:   git push -u origin <branch-name>
    // When the branch is ready to be a part of master
        // 1. git add -A, git commit -m "message", git push     // Branch is safe on github (not yet merged)
        // 2. git checkout master, git pull                     // Your local master is fully up to date
        // 3. git checkout <branch-name>
        // 4. git merge --no-ff master                          // if anything goes wrong it should   // 5. git add -A, git commit -m "after-merge", git push| happen here
        // 6. Go to github, Merge and Pull request
        // 7. Let the team know the remote master has NEW code.
        // 8. Person who does the Pull Request, checkout and pull down the new master
        // 9. Keep developing on same branch, or create new one


- React.createElement() // <div> // go to reactjs.org and read the react documentation, code along with their examples to get familiar.





- Context

    // Things to use Context for
        // Global Data => database collections
        // User Data
        // Global Toggle => Theme toggler that affects the whole site

    // Things to NOT use context for (renderProps or hooks would be better)
        // forms => Class component with it' own state to manage it's own form
            // handleSubmit
        // Toggle => 
    

- RenderProps
- Hooks (build, build, build)