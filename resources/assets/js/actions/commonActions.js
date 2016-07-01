export function startLoadingData() {
  return { type: 'START_LOADING_DATA' };
}

export function finishLoadingData(message) {
  return { type: 'FINISH_LOADING_DATA', message };
}
