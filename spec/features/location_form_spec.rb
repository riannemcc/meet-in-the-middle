feature 'Location Form:' do
  scenario 'Shows a form for point A.' do
    visit('/')
    fill_in('Location_A', :with => '50 Commercial Street')
  end
end