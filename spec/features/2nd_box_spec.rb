require 'rails_helper'

feature 'the user can enter a 2nd address' do
  scenario '...' do
    visit('/')
    (find_by_id 'address_text_box1').fill_in with: '50 Commercial St, Spitalfields, London E1 6LT, UK'
    click_button('find_yourself')
    (find_by_id 'address_text_box2').fill_in with: 'Westminster, London SW1A 1AA, UK'
    click_button('find_a_friend')
    expect(page).to have_button 'Find Midl'
  end
end
