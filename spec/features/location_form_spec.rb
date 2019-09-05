# frozen_string_literal: true

require 'rails_helper'

feature 'the user can enter an address' do
  scenario '...' do
    visit('/')
    (find_by_id 'address_text_box1').fill_in with: '50 Commercial St, Spitalfields, London E1 6LT, UK'
    click_button('find_yourself')
    expect { page }.not_to raise_error
  end
end
