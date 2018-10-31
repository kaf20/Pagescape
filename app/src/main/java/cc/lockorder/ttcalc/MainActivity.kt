package cc.lockorder.ttcalc

import android.os.Bundle
import android.support.v7.app.AppCompatActivity
import android.widget.FrameLayout


class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val fragmentContainer = findViewById<FrameLayout>(R.id.rate_list_fragment)
        if (fragmentContainer != null) {
            if (savedInstanceState != null) {
                return
            }
            supportFragmentManager.beginTransaction()
                .add(R.id.rate_list_fragment, ExchangeRateListFragment().apply { arguments = intent.extras }).commit()
        }
    }
}