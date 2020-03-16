# PostCatComment

This action is create cat comment.

## Inputs

### `owner`

**Required** owner name.

### `repo`

**Required** repo name.

### `issueNumber`

**Required** issue number.

Maybe, `{{ github.event.issues.id }}` .

### `myToken`

**Required** github token.

`{{ secrets.GITHUB_TOKEN }}` .

## Outputs

　∧,,∧
（=・ω・）
（,, ｕｕﾉ

## Example usage

```yml
jobs:
  build:
    steps:
    - name: Post Cat Comment
      uses: starfish719/post-cat-comment@v1
      with:
        owner: starfish719
        repo: post-cat-comment
        issueNumber: {{ github.event.issues.id }}
        myToken: ${{ secrets.GITHUB_TOKEN }}
```
