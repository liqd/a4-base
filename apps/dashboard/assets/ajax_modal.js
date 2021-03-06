/* This code is used to generate a modal with contents
   from a different page and the content is loaded via
   ajax as soon as the 'toggle modal' is clicked */

/* globals django */
$(function () {
  const modalHTML = (
    '<div class="modal" tabindex="-1" role="dialog">' +
      '<div class="modal-dialog modal-lg" role="document">' +
        '<div class="modal-content">' +
          '<div class="modal-header"><h2 class="modal-title mt-0"></h2>' +
            '<button type="button" class="close" data-bs-dismiss="modal" aria-label="' + django.gettext('Close') + '"><span aria-hidden="true">&times;</span></button>' +
          '</div>' +
          '<div class="modal-body"></div>' +
      '  </div>' +
      '</div>' +
    '</div>'
  )

  const extractScripts = function ($root, selector, attr) {
    const $existingValues = $('head').find(selector).map(function (i, e) {
      return $(e).attr(attr)
    })

    $root.find(selector).each(function (i, script) {
      const $script = $(script)
      const $matches = $existingValues.filter(function (i, v) {
        return v === $script.attr(attr)
      })
      if ($matches.length === 0) {
        $('head').append($script)
      }
    })
  }

  $(document).on('click', '[data-bs-toggle="ajax-modal"]', function (e) {
    e.preventDefault()
    const target = this.href + ' ' + this.dataset.targetSelector
    const $newModal = $(modalHTML)
    const _this = this

    $newModal.on('hidden.bs.modal', function () {
      $newModal.remove()
    })

    $newModal.find('.modal-body').load(target, function (html) {
      const $root = $('<div>').html(html)
      const title = $root.find('h1').text()
      $newModal.find('.modal-title').text(title)
      $newModal.attr('aria-label', title)
      extractScripts($root, 'script[src]', 'src')
      extractScripts($root, 'link[rel="stylesheet"]', 'href')

      $newModal.insertAfter(_this)
      $newModal.modal()
    })
  })
})
