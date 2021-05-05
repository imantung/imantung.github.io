---
layout: gist
title: Linux (File Permission)
category: System Infra
---

# File Permission

Reference:
- <https://www.maketecheasier.com/file-permissions-what-does-chmod-777-means/>
- <http://permissions-calculator.org/>

Permission Bit
```
+-----+---+--------------------------+
| rwx | 7 | Read, write and execute  |
| rw- | 6 | Read, write              |
| r-x | 5 | Read, and execute        |
| r-- | 4 | Read,                    |
| -wx | 3 | Write and execute        |
| -w- | 2 | Write                    |
| --x | 1 | Execute                  |
| --- | 0 | no permissions           |
+------------------------------------+

+------------+------+-------+
| Permission | Octal| Field |
+------------+------+-------+
| rwx------  | 0700 | User  |
| ---rwx---  | 0070 | Group |
| ------rwx  | 0007 | Other |
+------------+------+-------+
```

Common Permission Usage:
- `0755` Commonly used on web servers. The owner can read, write, execute. Everyone else can read and execute but not modify the file.
- `0777` Everyone can read write and execute. On a web server, it is not advisable to use ‘777’ permission for your files and folders, as it allows anyone to add malicious code to your server.
- `0644` Only the owner can read and write. Everyone else can only read. No one can execute the file.
- `0655` Only the owner can read and write, but not execute the file. Everyone else can read and execute, but cannot modify the file.

When applying permissions to directories on Linux, the permission bits have different meanings than on regular files.
- The read bit (`r`) allows the affected user to list the files within the directory
- The write bit (`w`) allows the affected user to create, rename, or delete files within the directory, and modify the directory's attributes
- The execute bit (`x`) allows the affected user to enter the directory, and access files and directories inside
- The sticky bit (`T`, or `t` if the execute bit is set for others) states that files and directories within that directory may only be deleted or renamed by their owner (or root)