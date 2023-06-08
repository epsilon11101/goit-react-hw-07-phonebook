export const getContactsSelector = (state) => state.contacts.contacts;

export const getContactsLoadingSelector = (state) => state.contacts.isLoading;

export const getContactsErrorSelector = (state) => state.contacts.error;

export const getContactSelector = (state) => state.contacts.contact;
