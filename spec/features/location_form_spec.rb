require 'rails_helper'

feature 'the user can enter an address' do
  scenario '...' do
    visit('/')
    fill_in 'autocomplete', with: '50 Commercial St, Spitalfields, London E1 6LT, UK'
    click_button('Find')
    expect { page }.not_to raise_error
  end
end
