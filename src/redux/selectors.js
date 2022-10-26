export const getContacts = state => state.contacts.items;

export const getIsLoading = state => state.contacts.isLoading;

export const getError = state => state.contacts.error;

export const getFilter = state => state.filter;

export const getVisibleContacts = state => {
  const filter = getFilter(state);
  const contacts = getContacts(state);

  if (!filter) {
    return contacts;
  }
  const normalizedFilter = filter.toLocaleLowerCase();
  const visibleContacts = contacts.filter(({ name, phone }) => {
    const normalizedName = name.toLocaleLowerCase();
    const result =
      normalizedName.includes(normalizedFilter) ||
      phone.includes(normalizedFilter);
    return result;
  });
  return visibleContacts;
};
