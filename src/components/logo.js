import React from "react";

const Logo = () => {
  return (
    <div className="logo">
      <img
        src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjMwIiB2aWV3Qm94PSIwIDAgOTIgMzAiIHdpZHRoPSI5MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGNsaXBQYXRoIGlkPSJhIj48cGF0aCBkPSJtMCAwaDkydjMwaC05MnoiLz48L2NsaXBQYXRoPjxnIGNsaXAtcGF0aD0idXJsKCNhKSIgZmlsbD0iIzNkYzM4MyI+PHBhdGggZD0ibTAgMjIuNzQ0OGMwLTIuMDk5IDAtNC4xOTgxIDAtNi4yOTcyIDAtLjE4OTEgMC0uMTg5MS4yMDM3NDUtLjE4OTFoNS4zODk5NjVjLjQwNzQ5IDAgLjgxNDk4LjAzNzggMS4yMDM5NS4xMTM1IDEuMDM3MjIuMjI2OSAxLjk0NDg3LjY2MTggMi42MzAxMiAxLjQ3NS4yOTYzOS4zNTkzLjU1NTY4Ljc1NjQuNjg1NDIgMS4yMTAyLjA3NC4yMjcuMTY2Ny40MzUuMjAzNy42NjE5LjExMTIuNTY3NC4xNDgyIDEuMTUzNi4wNTU2IDEuNzM5Ny0uMDkyNi42NDMxLS4yOTY0IDEuMjI5My0uNjQ4MzMgMS43Nzc3LS4zNTE5LjUyOTUtLjgxNTA0Ljk0NTQtMS4zNTIwOSAxLjI2Ny0uNDYzMDcuMjgzNy0uOTgxNzEuNDcyNy0xLjUwMDM0LjYwNTEtLjIwMzczLjA1NjgtLjQyNi4wNzU3LS42NDgyNy4xMTM1LS44MTQ5OC4xMzIzLTEuNjQ4NDguMDU2Ny0yLjQ4MTk3LjA3NTYtLjI0MDggMC0uNDgxNTkgMC0uNzAzODYgMC0uMTExMTMgMC0uMTQ4MTcuMDM3OC0uMTQ4MTcuMTUxM3YzLjU3NDJjMCAuMjA3OSAwIC4yMDc5LS4yMDM3NS4yMDc5LS44MzM1IDAtMS42NjY5OSAwLTIuNTAwNDk4IDAtLjE4NTIyMiAwLS4xODUyMjIgMC0uMTg1MjIyLS4xNzAyIDAtMi4wOTkxIDAtNC4yMTcgMC02LjMxNjF6bTIuODcwOTUtMS45NDc4djEuODUzM2MwIC4xMTM1LjAzNzA0LjE1MTMuMTQ4MTcuMTUxM2gyLjIyMjY3Yy40NjMwNiAwIC45MjYxMS0uMDc1NyAxLjMzMzYxLS4zNDA1LjM3MDQzLS4yNDU4LjY2Njc5LS41NDgzLjc5NjQ1LS45NjQ0LjEyOTY1LS4zNzgyLjE0ODE4LS43NzUzLjA3NDA5LTEuMTcyNC0uMDc0MDktLjM3ODMtLjI0MDc5LS43MTg2LS41MzcxNS0uOTY0NC0uNDQ0NTQtLjM5NzItLjk4MTY4LS41NDg1LTEuNTc0MzktLjU0ODUtLjc3NzkzLS4wMTg5LTEuNTU1ODcgMC0yLjMzMzc5IDAtLjEyOTY2IDAtLjE2NjcxLjAzNzgtLjE2NjcxLjE3MDIuMDM3MDUuNTg2Mi4wMzcwNSAxLjIxMDIuMDM3MDUgMS44MTU0em0yOS44NzY0NSAxLjk4NTdjLjAxODQgMy41NTUxLTIuOTI2NyA2LjU2MTktNi42MTI2IDYuNTQzMS0zLjY0ODgtLjAxOS02LjU1NjgtMi45MzEzLTYuNTU2OC02LjUyNDIgMC0zLjY0OTggMi45NDUtNi41NDMyIDYuNTkzOS02LjU0MzIgMy42MTE5LS4wMTg4IDYuNTkzOSAyLjkxMjMgNi41NzU1IDYuNTI0M3ptLTYuNTk0LTMuNDk4NWMtMS45MDc5IDAtMy41MTkyIDEuNTY5NS0zLjUxOTIgMy40OTg1IDAgMS45Mjg4IDEuNjExMyAzLjQ3OTUgMy40NDUxIDMuNDk4NCAyLjAxODkuMDM3NyAzLjYxMTgtMS41ODg1IDMuNjExOC0zLjQ5ODQtLjAxODUtMS45NDc5LTEuNTkyOS0zLjQ5ODUtMy41Mzc3LTMuNDk4NXoiLz48cGF0aCBkPSJtMTIuNzA2NSAyNi4wMTYxYzAtLjMyMTYgMC0uNjI0MS4wMTg2LS45NDU3LjAxODUtLjI2NDcgMC0uNTI5NC4wMzcxLS43OTQyLjAzNjktLjMwMjUuMDM2OS0uNjA1Mi4wNzQtLjkwNzcuMDM3MS0uMjI2OS4wMzcxLS40NTM4LjA3NDEtLjY2MTkuMDU1Ni0uMjY0Ny4xMTExLS41Mjk0LjE4NTItLjc3NTMuMTExMi0uMzQwMy4yNTkzLS42NjE4LjQ0NDUtLjk2NDQuMjQwOS0uMzk3Mi41NTU3LS43Mzc1LjkyNjItMS4wMjEyLjM4ODktLjMwMjUuODE0OS0uNTI5NSAxLjI1OTUtLjczNzUuMjQwOC0uMTEzNC40ODE2LS4xODkuNzIyMy0uMzIxNS4wMzctLjAxODkuMDc0MS0uMDE4OS4wOTI3LjAxODkuMjAzNy40MTYxLjI3NzguODMyMS4yOTYzIDEuMjg2IDAgLjE3MDIgMCAuMzIxNS0uMDE4NS40OTE2LS4wMTg2LjE3MDMtLjAzNzEuMzQwNC0uMDc0MS40OTE3LS4wOTI2LjMyMTUtLjIwMzcuNjQzLS4zODkuOTI2Ni0uMjIyMy4zNTkzLS41LjY0My0uODUyLjg3LS4yNzc4LjE3MDEtLjYxMTIuMjY0Ny0uOTA3Ni4zOTctLjI3NzguMTEzNS0uNTU1Ni4yMjctLjc5NjUuMzk3Mi0uMjU5My4xNzAyLS40MjU5LjQxNi0uNDYzLjczNzUtLjAxODUuMjQ1OC0uMDE4NS40OTE3IDAgLjczNzUuMzE0OS0uMzAyNi44MTUtLjQxNjEgMS4yNzgxLS40NzI4LjM1MTktLjAzNzguNzAzOC0uMDM3OCAxLjAzNzItLjAxODktLjEyOTctLjA5NDYtLjIwMzctLjE3MDItLjE4NTItLjIyNy4wOTI2LS4yMDc5IDEuNTAwMy4wMzc5IDIuMDkzLS4wNzU2LjM4OS0uMDc1Ni43NTk0LS4yNDU4Ljc1OTQtLjI0NTguMDkyNi0uMDM3OS4xODUyLS4wOTQ2LjI1OTMtLjEzMjQuNjI5OC0uMzU5MyAxLjAzNzMtLjkwNzcgMS4yNzgtMS41Njk1LjEyOTctLjM3ODIuMjAzOC0uNzU2NS4yNDA4LTEuMTUzNi4wMzctLjQzNS4wMTg1LS44Njk4LS4wNzQxLTEuMzA0OC0uMDc0LS4zMjE1LS4xODUxLS42MjQxLS4zMzM0LS45MDc3LS4yNzc4LS41Mjk1LS42NjY4LS45NDU2LTEuMTY2OS0xLjI4Ni0uNDgxNS0uMzQwMy0xLjAzNzItLjU2NzMtMS42MTE0LS42OTk3LS4zNzA0LS4wNzU1LS43NDA5LS4xMzIzLTEuMTExMy0uMTMyMy0uMzcwNSAwLS43NDA5LjAxODktMS4xMjk4LjA5NDYtLjI5NjQuMDU2Ni0uNTc0My4xMzIzLS44NTIuMjI2OS0uNTE4Ny4xODktMS4wMDAzLjQzNDktMS40NDQ4Ljc1NjQuMjQwNy4xMzI0LjQwNzUuNDE2LjQwNzUuNjgwOC4zMzM0LjIyNjkuNTE4Ni43MTg2LjE0ODEgMS4xMTU3LS43OTY0Ljg2OTktMS4wOTI3IDIuMDgwMS0xLjY4NTUgMy4wODI1LS4wOTI2LjE3MDEtLjI0MDguMjgzNi0uMzg5LjMyMTQtLjAxODQuMDk0NS0uMDU1NS4xODkxLS4wNzQuMjgzNy4zNTE5LjAxODkuNjQ4Mi4yNDU4LjYxMTIuNjgwOC0uMDM3LjI2NDYtLjA3NDEuNTQ4My0uMTExMS44MTMuMTg1Mi4wNTY4LjMzMzMuMTcwMy40MDc1LjM1OTMuMjIyMi0uMDM3Ny40ODE1IDAgLjY2NjcuMTcwMy4xMjk3LjEzMjMuMjU5My4yNjQ3LjM1MTkuNDE2MXoiLz48cGF0aCBkPSJtMTMuNTIxMyAyMy4xOTg0Yy0uMDM3LS4wOTQ1IDAtLjE4OTEgMC0uMjY0Ny4wMzcxLS4yMjY5LjA5MjctLjQ1MzkuMjAzOC0uNjYxOS4xNDgyLS4yNjQ3LjMzMzQtLjQ5MTcuNTU1Ny0uNjk5Ny4yNTkzLS4yNDU4LjU3NDItLjQ1MzkuODUyLS42ODA4LjMxNDktLjI2NDcuNjExMy0uNTQ4NC44MTUtLjg4ODguMDU1Ni0uMDk0NS4xMjk2LS4yMDguMTY2Ni0uMzIxNS4wMTg3LS4wMTg5LjAxODctLjAzNzguMDU1Ny0uMDU2Ny4wMTg1LjA5NDYtLjAzNy4xODkyLS4wNTU3LjI4MzctLjA5MjUuMzc4Mi0uMjc3Ny43MTg2LS41MzcxIDEuMDIxMi0uMjc3OC4zNDA0LS42MTEyLjYwNTEtLjk0NDUuODY5OC0uMzMzNC4yODM3LS42ODU0LjU0ODUtLjkwNzcuOTI2Ny0uMDc0MS4xMzI0LS4xNDgxLjI2NDctLjE2NjcuMzk3IDAgMCAwIC4wMzc5LS4wMzcxLjA3NTd6Ii8+PHBhdGggZD0ibTIzLjExNTQgMjYuNTgzNGMtLjExMTEuMTMyNS0uMjQwOC4yNjQ5LS4zNzA1LjM3ODMtLjI5NjQuMjY0OC0uNjQ4My40NTM5LTEuMDM3My40OTE3LS4zMzM0LjAxODktLjY2NjcuMDE4OS0xLjAwMDItLjAzNzgtLjUzNzEtLjExMzUtMS4wNTU3LS4yODM3LTEuNTU1OC0uNTI5NS0uNzU5NC0uMzc4Mi0xLjQ2MzItLjg1MS0yLjE0ODYtMS4zODA1LS40MjYtLjMyMTUtLjg1Mi0uNjYxOC0xLjM3MDYtLjc3NTMuMTY2Ny0uMDM3OS40MDc1LS4wNzU3LjcyMjMtLjExMzUgMS4wNzQ0LS4xNzAyIDEuMjA0LS4xNzAyIDEuNDA3Ny0uMjI2OS43NDA5LS4yMDgxIDEuMTY3LS44ODg4IDEuNDYzMy0xLjM2MTUuMTI5Ni0uMjA4MiAxLjA1NTgtMS43MjEuNTM3MS0zLjQwMzktLjIyMjItLjczNzYtLjYyOTgtMS4yMTAzLS43NTk0LTEuMzQyNy0uNDA3NS0uNDE2LS45MDc1LS42ODA4LTEuNDI2Mi0uOTI2Ny0uOTI2MS0uNDM1LTEuOTA3OC0uNjI0LTIuOTI2NS0uNjA1MS0uOTQ0NiAwLTEuODg5My4wMzc5LTIuODUyNS4wMzc5LS4yNTkyIDAtLjUxODYtLjA1NjgtLjc1OTQtLjE3MDMtLjQ2My0uMjA3OS0uODE0OS0uNTQ4NC0xLjA5Mjc3LS45ODMzLS4wMTg0OC0uMDE4OS0uMDM3MTEtLjA3NTctLjA3NDA2LS4wNzU3LS4wNTU2NiAwLS4wMzcwMy4wNTY4LS4wMzcwMy4wOTQ2LS4wMTg2My4yNDU5LjAxODQ4LjQ3MjguMDczOTguNzE4Ni4wOTI2OC41Mjk2LjI0MDg4IDEuMDU5LjQ0NDY4IDEuNTUwNy4xODUxLjQzNDkuNDA3NC44NTEuNzU5NCAxLjE5MTMuNS40NTM5IDEuMTExMy42MjQxIDEuNzQxLjcxODYuMTExMi4wMTg5LjIwMzguMDE4OS4zMTQ5LjAzNzl2LS4wMTljLjIwMzctLjYyNC44NTItMS4wMDIyIDEuNTAwMy0xLjAwMjIuMTQ4MiAwIC4yNzc4LjAzNzguNDA3NS4wNzU2LjAzNyAwIC4wNTU1LS4wMTg4LjA5MjYtLjAxODguMDE4Ni0uMDE5LjAzNzEtLjAxOS4wMzcxLS4wMzc5LS4yNzc5LS4xMTM1LS41NzQzLS4yMjY5LS44ODkxLS4zMjE1LjM4OSAwIC43NDA5LjAzNzkgMS4wNzQyLjA5NDYuMDM3MSAwIC4wNzQxLjAxOS4xMTEzLjAxOS4xMTEtLjA1NjguMjIyMi0uMTMyNC4zMzMzLS4xNzAzLjM3MDUtLjE3MDMuNzU5NS0uMDk0NiAxLjAwMDIuMjY0Ny4wOTI2LjEzMjQuMTExMi4zNDA0LjA3NDEuNTEwNy43NDA5LjU2NzIuOTQ0NiAxLjU4ODQuNjQ4MyAyLjQyMDUtLjEyOTYuMzc4Mi0uMzUyLjY2MTktLjYxMTIuODg4Ny4wMTg0LjI2NDgtLjExMTIuNTQ4NS0uMzUxOS42ODA4LS4xMTEyLjA1NjctLjIyMjMuMTEzNS0uMzMzNS4xODkyLS4wMzcxLjAxODktLjEyOTcuMDU2Ny0uMTQ4Mi4wOTQ1LjA3NDEtLjA1NjguMDkyNy0uMDc1Ni4wMzcxLS4wMTg5LS4wMTg2LjAxODktLjA1NTYuMDM3OC0uMDc0MS4wNTY3LS4xNjY3LjEzMjQtLjM3MDUuMjA4MS0uNTU1Ny4yMDgxLS4wNTU2LjE3MDEtLjE2NjcuMzIxNC0uMzMzMy40MTU5LS4wOTI3LjA1NjgtLjE4NTMuMDk0Ny0uMjk2NC4xMzI0LS4wMzcxLjAxOS0uMDkyNi4wMzc5LS4xMjk3LjA1NjgtLjA1NTUuMDE4OS0uMjAzNy4xMzI0LS4wMzcxIDAtLjE2NjYuMTMyNC0uMzE0OC4yMDgtLjUxODYuMjA4LS4xMTExIDAtLjIwMzYtLjAxOS0uMjk2Mi0uMDU2Ny0uMDM3Mi4yMDgtLjE2NjguMzc4Mi0uMzcwNi40NzI3LS4xMTExLjEzMjQtLjI5NjQuMjA4LS41MTg2LjIwOC0uNjg1MyAwLS44NzA2LS43NTY0LS41NTU2LTEuMTcyNC0uMTg1My0uMjI3LS4yMDM4LS41NDg0LS4wNTU2LS44MTMyLjAxODUtLjAzNzguMDM3LS4wNTY4LjAzNy0uMDk0NS0uMTI5Ni0uNTI5NS0uMDc0LTEuMDc3OS4yNDA4LTEuNTUwNy4wMTg1LS4wMzc4LjAzNzEtLjA1NjcuMDU1Ni0uMDk0NS0uMDM3MS0uMTUxMy0uMDc0MS0uMzIxNi0uMDc0MS0uNDUzOC0uMDE4NS0uMzc4Mi4yMjIyLS42MDUzLjUwMDEtLjY2MTktLjAxODUtLjAzNzktLjAzNzEtLjA5NDYtLjA1NTYtLjEzMjQtLjMzMzQtLjAzNzktLjY2NjgtLjA3NTctLjk4MTctLjE3MDMtLjc0MDktLjIwNzktMS4zNTIxLS41ODYxLTEuNzc4LTEuMjY3LS4wMTg2LS4wMzc3LS4wMzcxLS4xMTM0LS4wOTI3LS4wOTQ1cy0uMDM3LjA5NDUtLjAzNy4xMzI0djEwLjA0MTVjMCAuMTcwMS4wMTg0LjE4OS4yMDM3LjIwOGguODUyYy40NDQ2LS4wMTkuODcwNS0uMDk0NiAxLjI1OTUtLjM0MDQuMzE0OS0uMTg5MS41NzQyLS40MzUuNzc4LS43MTg2LjIwMzctLjMwMjYuMjk2NC0uNTY3My4zMzM0LS42NjE5LjMxNDktLjk4MzMuMDM3LTIuNDU4My4xNDgyLTIuNTcxOC4wMTg1LS4wMTg4LjAzNy0uMDM3OC4wMzctLjAzNzguMDU1NS0uMDE4OS4xMjk3LjAxOS4yMDM3LjAxOS40ODE2LS4wNTY4LjgxNS4xNzAxIDEuMDkyOC41NDgzLjIyMjMuMzIxNS40NDQ1LjY2MTkuNzAzOS45NjQ1LjI5NjMuMzU5My42NDgzLjY2MTggMS4wMTg3LjkyNjYtLjkyNjItLjM0MDQtMS42My0uOTY0NS0yLjE4NTYtMS44MzQzLS4wMTg1LjA5NDUgMCAuMTUxMyAwIC4xODkuMTExMS40NzI4LjI3NzguOTQ1Ni40MjYgMS4zOTk0LjI0MDguNzM3NS42MTEyIDEuMzQyNiAxLjI0MSAxLjc5NjUuNTU1Ni4zOTcyIDEuMTg1NC42MDUxIDEuODcwNy42NjE4LjM3MDUuMDM3OS43MjI1IDAgMS4wOTI5LS4wNTY3LjQwNzQtLjA1NjcuNzk2NC0uMTUxMiAxLjE2NjktLjMyMTUuOTYzMi0uNDM0OCAxLjc5NjctMS4wNzc5IDIuNDI2My0xLjk2NjYuMTI5OC0uMTg5MS4yNzc5LS4zOTcyLjMzMzUtLjYyNDEtLjA1NTYuMDU2OC0uMDkyNi4wNzU3LS4xMTExLjExMzR6Ii8+PHBhdGggZD0ibTIwLjg1NTUuNDExMzA0Yy45MjYxLS4xNzAxOTUgMi4zMzM4LS4xNzAxOTUgMy4yNDE0IDB2Ny42Nzc3MDZjMCA0LjA4NDU5LTIuMDM3NCA1Ljg2MjI5LTUuNTE5NyA1Ljg2MjI5LTMuNDgyMSAwLTUuNTE5Ni0xLjc3NzctNS41MTk2LTUuODYyMjl2LTcuNjc3NzA2Yy45MDc2LS4xNzAxOTUgMi4zMzM4LS4xNzAxOTUgMy4yNDE0IDB2OC4xODgyNTZjMCAxLjUzMTc0Ljc3OCAyLjY0NzQ0IDIuMjc4MiAyLjY0NzQ0IDEuNTAwMyAwIDIuMjc4My0xLjExNTcgMi4yNzgzLTIuNjQ3NDR6bTE0LjA5NTQgMGMuMTY2Ni45NDU1MjYuMTY2NiAxLjc3NzU3NiAwIDIuNzA0MjA2aC0zLjUwMDd2MTAuNTE0MTljLS45MjYxLjE3MDMtMi4yNzgyLjE3MDMtMy4xODU5IDB2LTEwLjUxNDE5aC0zLjUxOTFjLS4xNjY4LS45NDU1My0uMTY2OC0xLjc3NzYgMC0yLjcwNDIwNnptNS44NzE2IDBjMi44ODk1IDAgNC44ODk4IDEuNzc3NTg2IDQuODg5OCA0LjM2ODMyNiAwIDEuNzk2NS0uOTQ0NiAzLjE5NTg5LTIuNDYzNSAzLjg5NTU1bDMuMTQ4OSA0Ljk3MzUyYy0uOTA3Ny4xNzAxLTIuNTU2MS4xNzAxLTMuNDYzOCAwbC0yLjg1MjMtNC40ODE4MmgtMS4yNTk2djQuNDgxODJjLS45MDc2LjE3MDEtMi4yNzgyLjE3MDEtMy4xODU4IDB2LTEzLjIzNzM5NnptLTIuMDAwNSA2LjA1MTM3NmgyLjAwMDVjLjg3MDUgMCAxLjYyOTktLjUyOTUgMS42Mjk5LTEuNjY0MTMgMC0xLjEzNDY0LS43NTk0LTEuNjY0MTMtMS42Mjk5LTEuNjY0MTNoLTIuMDAwNXptMTEuNjEzNSA3LjE4NjAyYy0uOTA3Ni4xNzAxLTIuMjc4My4xNzAxLTMuMTg1OSAwdi0xMy4yMzczOTZjLjkwNzYtLjE3MDE5NSAyLjI3ODMtLjE3MDE5NSAzLjE4NTkgMHptMTAuODkxMS0xMy4yMzczOTZjLjE2NjYuOTQ1NTI2LjE2NjYgMS43Nzc1NzYgMCAyLjcwNDIwNmgtMy41MDA4djEwLjUxNDE5Yy0uOTI2MS4xNzAzLTIuMjc4Mi4xNzAzLTMuMTg1OSAwdi0xMC41MTQxOWgtMy41MDA2Yy0uMTY2Ny0uOTQ1NTMtLjE2NjctMS43Nzc2IDAtMi43MDQyMDZ6bTMuODg5NiAxMy4yMzczOTZjLS45MDc1LjE3MDEtMi4yNzgyLjE3MDEtMy4xODU4IDB2LTEzLjIzNzM5NmMuOTA3Ni0uMTcwMTk1IDIuMjc4My0uMTcwMTk1IDMuMTg1OCAwem0xNC4yODEtNi42MTg3MmMwIDMuODAxMDItMi43Nzg0IDYuOTIxMzItNi44NzIxIDYuOTIxMzItNC4xMTE5IDAtNi44NzE4LTMuMTIwMy02Ljg3MTgtNi45MjEzMiAwLTMuODAxMDEgMi43Nzg0LTYuOTIxMjQ1IDYuODcxOC02LjkyMTI0NSA0LjExMjEgMCA2Ljg3MjEgMy4xMDEzMjUgNi44NzIxIDYuOTIxMjQ1em0tMTAuNTAyNSAwYzAgMi42NDc0NSAxLjY2NzEgNC4yMTcwMiAzLjYzMDQgNC4yMTcwMiAxLjk2MzQgMCAzLjYzMDMtMS41Njk1NyAzLjYzMDMtNC4yMTcwMiAwLTIuNjQ3NDctMS42NjY5LTQuMjE3MDMtMy42MzAzLTQuMjE3MDMtMS45NjMzIDAtMy42MzA0IDEuNTY5NTYtMy42MzA0IDQuMjE3MDN6bTIzLjAwNDUgNi42MTg3MmMtLjkyNjEuMTcwMS0xLjU3MzkuMTcwMS0yLjUwMDEgMGwtNi4wMzgyLTcuNzUzMzV2Ny43NTMzNWMtLjkyNjIuMTcwMS0yLjI3ODYuMTcwMS0zLjE4NjMgMHYtMTMuMjM3Mzk2Yy45MjYxLS4xNzAxOTUgMS41NzQ3LS4xNzAxOTUgMi41MDA5IDBsNi4wMzgyIDcuNzUzMzI2di03Ljc1MzMyNmMuOTI2Mi0uMTcwMTk1IDIuMjc4Ni0uMTcwMTk1IDMuMTg1NSAwem0tODAuMDM0NS0uMjgzN2MtLjkyNi4xNzAyLTEuNTc0My4xNzAyLTIuNTAwNDMgMGwtNi4wMzgyMi03Ljc1MzN2Ny43NTMzYy0uOTI2MS4xNzAyLTIuMjc4MjIuMTcwMi0zLjE4NTgxNiAwdi0xMy4yMzczNTRjLjkyNjExNi0uMTcwMTk0NyAxLjU3NDM5Ni0uMTcwMTk0NyAyLjUwMDQ5NiAwbDYuMDM4MjkgNy43NTMzMjR2LTcuNzUzMzI0Yy45MjYwNi0uMTcwMTk0NyAyLjI3ODE4LS4xNzAxOTQ3IDMuMTg1NjggMHoiLz48L2c+PC9zdmc+"
        alt="logo"
      ></img>
    </div>
  );
};

export default Logo;
