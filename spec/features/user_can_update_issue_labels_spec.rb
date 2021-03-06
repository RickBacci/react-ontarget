require 'rails_helper'

feature "User" do
  include OmniAuthUser
  include GithubRepo

  before do
    stub_omniauth
    create_client
  end

  scenario "can update an issues labels" do
    VCR.use_cassette("user_update_issue_labels") do
      create_test_repo('test_repo')

      visit root_path
      click_on "Login with Github"
      fill_in 'Search for a Repo', with: 't'
      find('.test_repo-add-btn').click()

      expect(page).to have_content('Backlog')
      expect(page).to have_content('Ready')
      expect(page).to have_content('Current')
      expect(page).to have_content('Completed')

      click_on "New Issue"

      fill_in "Title", with: 'New test issue'
      fill_in "User story...", with: "As a test user..."

      click_on "Create Issue"

      expect(page).to have_content('New test issue')
      expect(page).to have_content('As a test user...')
      expect(page).to have_content('Issue Created!')

      fill_in "title", with: 'updated test issue'
      fill_in "body", with: "As a test user updated"

      find('textarea#title').click()

      expect(page).to have_content('updated test issue')
      expect(page).to have_content('As a test user updated')
      # expect(page).to have_content('Issue Updated!')

      delete_test_repo('test_repo')
    end
  end
end

