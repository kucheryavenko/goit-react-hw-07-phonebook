export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilter = state => state.filter;

export const selectVisibleContacts = state => {
  const filter = selectFilter(state);
  const contacts = selectContacts(state);

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
