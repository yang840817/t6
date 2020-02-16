# !bin/bash
# program: Sync different repo commit tree
# history: JinWen first release on 20200216
ORIGIN_REPO_PATH="/Users/Mac/Desktop/web/lastStand/t6/Jin_t6"
ORIGIN_REPO_COPY_PATH="/Users/Mac/Desktop/web/lastStand/t6/Jin_t6/*"
TARGET_REPO_PATH="/Users/Mac/Desktop/Layout_Practice/Business_Planet_template"

git -C $ORIGIN_REPO_PATH commit -m "$1"
git -C $ORIGIN_REPO_PATH stash -u

cp $ORIGIN_REPO_COPY_PATH $TARGET_REPO_PATH
git -C $TARGET_REPO_PATH add .
git -C $TARGET_REPO_PATH commit -m "$1"

git -C $ORIGIN_REPO_PATH stash pop
