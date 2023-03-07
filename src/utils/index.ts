import { API_PREFIX, PAGE_SIZE } from "../constants";
import { IPageAction, IPageState } from "../interfaces";

export const pageReducer = (state: IPageState, action: IPageAction) => {
  const { type, value } = action;

  if (!!type) {
    return { ...state, [type]: value };
  }

  return state;
};

export async function getPage(
  page: number,
  signal?: AbortSignal
): Promise<any> {
  const limit = PAGE_SIZE;
  const offset = PAGE_SIZE * page;

  const req = await fetch(
    `${API_PREFIX}/pokemon?offset=${offset}&limit=${limit}`,
    { signal }
  );

  if (req.status >= 400) {
    throw new Error(req.statusText);
  }

  const res: any = await req.json();

  return {
    ...res,
    results: res.results.map((p: { url: string; name: any; }) => {
      const id = Number(
        p.url.replace(`${API_PREFIX}/pokemon`, "").replaceAll("/", "")
      );

      return { id, name: p.name, url: p.url };
    }),
  };
}

export function generateHashId(id: number) {
  return `#${`${id}`.padStart(4, '0')}`;
}