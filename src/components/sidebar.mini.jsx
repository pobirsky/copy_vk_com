const style = {
  svg: {
    width: "20",
    height: "30",
    color: "#5181b8",
  },
};

export function Mini() {
  return (
    <svg
      style={style.svg}
      fill="none"
      height="30"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipEule="evenodd"
        d="M11.76 7.7c-.28-.27-.52-.51-.7-.73a2.3 2.3 0 01-.47-.77 2.25 2.25 0 010-1.4c.1-.3.27-.54.46-.77.19-.22.45-.48.73-.76l.25-.24.24-.25c.28-.28.54-.54.76-.73.23-.19.47-.36.77-.46.46-.14.94-.14 1.4 0 .3.1.54.27.77.46.22.19.46.43.74.7l.26.28.27.26c.28.28.52.52.7.74.2.23.37.47.47.77.14.46.14.94 0 1.4-.1.3-.27.54-.46.77-.19.22-.45.48-.73.76l-.25.24-.24.25c-.28.28-.54.54-.76.73-.23.19-.47.36-.77.46-.46.14-.94.14-1.4 0a2.3 2.3 0 01-.77-.46 13.4 13.4 0 01-.74-.7l-.26-.28-.27-.26zm4.4-1.03l-.25.24-.24.25c-.3.3-.5.5-.67.64a.85.85 0 01-.27.18.75.75 0 01-.46 0A.86.86 0 0114 7.8c-.16-.14-.36-.33-.67-.64l-.24-.25-.25-.24c-.3-.3-.5-.5-.64-.67a.85.85 0 01-.18-.27.75.75 0 010-.46.85.85 0 01.18-.27c.14-.16.33-.36.64-.67l.25-.24.24-.25c.3-.3.5-.5.67-.64a.86.86 0 01.27-.18.75.75 0 01.46 0c.04.01.11.05.27.18.16.14.36.33.67.64l.24.25.25.24c.3.3.5.5.64.67.13.16.17.23.18.27.05.15.05.31 0 .46a.86.86 0 01-.18.27c-.14.16-.33.36-.64.67zM11 14.12c0-.4 0-.74.02-1.02.03-.3.08-.59.23-.87.21-.42.56-.77.98-.98.28-.15.58-.2.87-.23.28-.02.65-.02 1.05-.02h.7c.4 0 .77 0 1.05.02.3.03.59.08.87.23.42.21.77.56.98.98.15.28.2.58.23.87.02.28.02.63.02 1.02v.76c0 .4 0 .74-.02 1.02a2.25 2.25 0 01-1.2 1.86c-.3.14-.59.2-.88.22-.28.02-.65.02-1.05.02h-.7c-.4 0-.77 0-1.05-.02-.3-.03-.59-.08-.87-.23a2.25 2.25 0 01-.98-.98 2.3 2.3 0 01-.23-.87c-.02-.28-.02-.63-.02-1.02v-.38zm3.85 2.38h-.7c-.43 0-.71 0-.92-.02a.86.86 0 01-.32-.06.75.75 0 01-.33-.33.86.86 0 01-.06-.32c-.02-.2-.02-.49-.02-.92v-.7c0-.43 0-.71.02-.92.01-.2.04-.28.06-.32a.75.75 0 01.33-.33.85.85 0 01.32-.06c.2-.02.49-.02.92-.02h.7c.43 0 .71 0 .92.02.2.01.28.04.32.06.14.07.26.19.33.33.02.04.05.11.06.32.02.2.02.49.02.92v.7c0 .43 0 .71-.02.92a.86.86 0 01-.06.32.75.75 0 01-.33.33.86.86 0 01-.32.06c-.2.02-.49.02-.92.02zM2 5.12v.76c0 .4 0 .74.02 1.02a2.25 2.25 0 001.2 1.86c.3.14.59.2.88.22.28.02.65.02 1.05.02h.7c.4 0 .77 0 1.05-.02a2.25 2.25 0 001.86-1.2c.14-.3.2-.59.22-.88C9 6.62 9 6.27 9 5.88v-.76c0-.4 0-.74-.02-1.02a2.3 2.3 0 00-.23-.87 2.25 2.25 0 00-.98-.98 2.3 2.3 0 00-.87-.23C6.62 2 6.25 2 5.85 2h-.7c-.4 0-.77 0-1.05.02a2.25 2.25 0 00-1.86 1.2c-.14.3-.2.59-.22.88C2 4.38 2 4.73 2 5.12zM5.5 7.5h.35c.43 0 .71 0 .92-.02.2-.01.28-.04.32-.06a.75.75 0 00.33-.33.85.85 0 00.06-.32c.02-.2.02-.49.02-.92v-.7c0-.43 0-.71-.02-.92a.85.85 0 00-.06-.32.75.75 0 00-.33-.33.86.86 0 00-.32-.06c-.2-.02-.49-.02-.92-.02h-.7c-.43 0-.71 0-.92.02a.86.86 0 00-.32.06.75.75 0 00-.33.33.85.85 0 00-.06.32c-.02.2-.02.49-.02.92v.7c0 .43 0 .71.02.92.01.2.04.28.06.32.07.14.19.26.33.33.04.02.11.05.32.06.2.02.49.02.92.02zM2 14.12c0-.4 0-.74.02-1.02.03-.3.08-.59.23-.87.21-.42.56-.77.98-.98.28-.15.58-.2.87-.23.28-.02.65-.02 1.05-.02h.7c.4 0 .77 0 1.05.02.3.03.59.08.87.23.42.21.77.56.98.98.15.28.2.58.23.87.02.28.02.63.02 1.02v.76c0 .4 0 .74-.02 1.02a2.25 2.25 0 01-1.2 1.86c-.3.14-.59.2-.88.22-.28.02-.65.02-1.05.02h-.7c-.4 0-.77 0-1.05-.02a2.25 2.25 0 01-1.86-1.2 2.3 2.3 0 01-.22-.88C2 15.62 2 15.27 2 14.88v-.38zm3.85 2.38h-.7c-.43 0-.71 0-.92-.02a.86.86 0 01-.32-.06.75.75 0 01-.33-.33.85.85 0 01-.06-.32c-.02-.2-.02-.49-.02-.92v-.7c0-.43 0-.71.02-.92.01-.2.04-.28.06-.32a.75.75 0 01.33-.33.85.85 0 01.32-.06c.2-.02.49-.02.92-.02h.7c.43 0 .71 0 .92.02.2.01.28.04.32.06.14.07.26.19.33.33.02.04.05.11.06.32.02.2.02.49.02.92v.7c0 .43 0 .71-.02.92a.85.85 0 01-.06.32.75.75 0 01-.33.33.86.86 0 01-.32.06c-.2.02-.49.02-.92.02z"
        fill="currentColor"
        fill-rule="evenodd"
      />
    </svg>
  );
}
