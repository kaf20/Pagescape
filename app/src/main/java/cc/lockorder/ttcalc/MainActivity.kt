package cc.lockorder.ttcalc

import android.os.Bundle
import android.support.v7.app.AppCompatActivity
import android.widget.FrameLayout


class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val fragmentContainer = findViewById<FrameLayout>(R.id.fragment_container)
        if (fragmentContainer != null) {
            if (savedInstanceState != null) {
                return
            }
            supportFragmentManager.beginTransaction()
                .add(R.id.fragment_container, ExchangeRateListFragment().apply { arguments = intent.extras }).commit()
        }
    }
}