<?php


class AppViewTest extends TestCase
{
    /**
     * A basic functional test for App Blade View.
     *
     * @return void
     */
    public function testAppView()
    {
        $this->visit('/')
             ->see('css/app.css')
             ->see('js/app.js');
    }
}
