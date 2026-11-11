const consoleModal = document.getElementById('consoleModal');

if (consoleModal) {
  consoleModal.addEventListener('show.bs.modal', (event) => {
    const trigger = event.relatedTarget;
    if (!trigger) return;

    document.getElementById('consoleModalTitle').textContent = trigger.dataset.title;
    document.getElementById('consoleModalEra').textContent = trigger.dataset.era;
    document.getElementById('consoleModalDescription').textContent = trigger.dataset.description;
  });
}

const feedbackForm = document.getElementById('feedbackForm');

if (feedbackForm) {
  feedbackForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!feedbackForm.reportValidity()) return;

    document.getElementById('formStatus').textContent =
      'Obrigado pelo feedback! Esta demonstração não envia nem armazena sua mensagem.';
    feedbackForm.reset();
  });
}