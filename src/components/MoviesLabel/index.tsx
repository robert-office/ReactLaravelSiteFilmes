type EnvolvimentLabel = {
    envolviment: {
        SectionTitle: string,
        SectionSubTitle: string
    }
}

export const Label = ( {envolviment} : EnvolvimentLabel) => {
  return (
    <div className="px-5 relative flex items-end font-bold">
      <h2 className="text-2xl">{envolviment.SectionTitle} </h2>
      <a className="ml-10 flex items-center text-gray-400">
        <span className="text-sm">{envolviment.SectionSubTitle}</span>
        <svg
          className="ml-3 h-3.5"
          aria-hidden="true"
          focusable="false"
          data-prefix="far"
          data-icon="chevron-right"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 512"
        >
          <path
            fill="currentColor"
            d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z"
          />
        </svg>
      </a>
      <div className="ml-auto flex">
        <a className="h-6 w-6 flex items-center justify-center rounded-md bg-gray-100">
          <svg
            className="h-3 text-gray-700"
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="chevron-left"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 512"
          >
            <path
              fill="currentColor"
              d="M231.293 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L70.393 256 251.092 74.87c4.686-4.686 4.686-12.284 0-16.971L231.293 38.1c-4.686-4.686-12.284-4.686-16.971 0L4.908 247.515c-4.686 4.686-4.686 12.284 0 16.971L214.322 473.9c4.687 4.686 12.285 4.686 16.971-.001z"
            />
          </svg>
        </a>
        <a className="ml-1.5 h-6 w-6 flex items-center justify-center rounded-md bg-yellow-400">
          <svg
            className="h-3 text-gray-700"
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="chevron-right"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 512"
          >
            <path
              fill="currentColor"
              d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};
