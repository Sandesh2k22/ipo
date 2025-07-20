const STORAGE_KEY = 'ipoList';

export const getIPOs = () => {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
};

export const saveIPOs = (ipoList) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(ipoList));
};

export const addIPO = (ipo) => {
  const current = getIPOs();
  const newList = [...current, ipo];
  saveIPOs(newList);
};

export function deleteIPO(id) {
  const existing = getIPOs();
  const updated = existing.filter((ipo) => ipo.id !== id);
  saveIPOs(updated);
}

export function updateIPO(id, updatedData) {
  let data = getIPOs();
  const index = data.findIndex(ipo => ipo.id === id);
  if (index !== -1) {
    data[index] = { ...updatedData, id };
    saveIPOs(data);
  }
}
