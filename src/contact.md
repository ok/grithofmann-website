---
title: Contact
layout: base.liquid
---
    <section class="content">
      <p class="is-size-4">Contact Page</p>
    </section>

    <section class="section">
      <div class="container">
        <div class="box">
          <form action="#" method="POST">
            
            <!-- Name Field -->
            <div class="field">
              <label class="label">Name</label>
              <div class="control">
                <input class="input" type="text" placeholder="Ihr Name" required>
              </div>
            </div>

            <!-- Email Field -->
            <div class="field">
              <label class="label">E-Mail</label>
              <div class="control">
                <input class="input" type="email" placeholder="Ihre E-Mail-Adresse" required>
              </div>
            </div>

            <!-- Subject Field -->
            <div class="field">
              <label class="label">Betreff</label>
              <div class="control">
                <input class="input" type="text" placeholder="Betreff" required>
              </div>
            </div>

            <!-- Message Field -->
            <div class="field">
              <label class="label">Nachricht</label>
              <div class="control">
                <textarea class="textarea" placeholder="Ihre Nachricht" rows="5" required></textarea>
              </div>
            </div>

            <!-- Submit Button -->
            <div class="field is-grouped is-justify-content-flex-end">
              <div class="control">
                <button class="button is-link">Absenden</button>
              </div>
            </div>

          </form>
        </div>
      </div>
    </section>
